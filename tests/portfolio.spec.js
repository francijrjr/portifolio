import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // External font availability must not block interaction regression tests.
  await page.route('https://fonts.googleapis.com/**', route => route.fulfill({ contentType: 'text/css', body: '' }));
  // Isolate an existing third-party counter; never send test visits.
  await page.route('https://visitor.6developer.com/**', route => route.fulfill({
    json: { totalCount: 12, onlineCount: 1 },
  }));
});

for (const width of [320, 390, 768, 1440]) {
  test(`translated headings fit at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toHaveAttribute('data-text-mounted', 'true');
    for (const [language, expected] of [
      ['en', 'Code that understands the business.'],
      ['es', 'Código que entiende el negocio.'],
      ['pt', 'Código que entende o negócio.'],
    ]) {
      await page.locator(`[data-lang-btn="${language}"]`).click();
      await expect(heading.locator('.hero-text-active')).toContainText(expected);
      await expect(page.locator(`[data-lang-btn="${language}"]`)).toHaveAttribute('aria-pressed', 'true');
      await expect(heading.locator('.hero-text-active [aria-hidden="true"]').first()).toHaveCSS('opacity', '1');
      const overflow = await page.evaluate(() => ({
        page: document.documentElement.scrollWidth > innerWidth,
        heading: document.querySelector('h1').scrollWidth > document.querySelector('h1').clientWidth,
      }));
      expect(overflow).toEqual({ page: false, heading: false });
    }
    await page.screenshot({ path: `.preview/portfolio-${width}.png` });
    for (const section of ['sobre', 'projetos', 'processo', 'contato']) {
      const title = page.locator(`#${section} h2`).first();
      await title.scrollIntoViewIfNeeded();
      await expect(title.locator('[aria-hidden="true"]').first()).toHaveCSS('opacity', '1');
    }
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
    expect(errors).toEqual([]);
  });
}

test('reduced motion shows readable static text, including after preference changes', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('h1')).toHaveAttribute('data-text-mounted', 'true');
  await expect(page.locator('h1 .hero-text-active [aria-hidden]')).toHaveCount(0);
  await expect(page.locator('h1')).toContainText('Código que entende');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(page.locator('h1 .hero-text-active [aria-hidden]').first()).toHaveCSS('opacity', '1');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('h1 .hero-text-active [aria-hidden]')).toHaveCount(0);
});

test('content and contact links remain visible without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.route('https://fonts.googleapis.com/**', route => route.fulfill({ contentType: 'text/css', body: '' }));
  await page.goto('http://127.0.0.1:5173/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  for (const selector of ['.profile-card', '.project-card', '.contact-card']) {
    await expect(page.locator(selector).first()).toHaveCSS('opacity', '1');
  }
  await expect(page.locator('a[href="mailto:frjuniorfrjr@gmail.com"]').first()).toBeVisible();
  await context.close();
});

test('navigation and contact message still work', async ({ page }) => {
  await page.goto('/');
  await page.locator('.hero-actions a[href="#projetos"]').click();
  await expect(page).toHaveURL(/#projetos$/);
  await page.locator('input[name="name"]').fill('Teste de integração');
  await page.locator('input[name="email"]').fill('teste@example.com');
  await page.locator('textarea').fill('Gostaria de conversar sobre um projeto.');
  await page.evaluate(() => {
    window.open = url => { window.__contactUrl = url; return null; };
  });
  await page.locator('.form-submit').click();
  const destination = new URL(await page.evaluate(() => window.__contactUrl));
  expect(destination.hostname).toBe('wa.me');
  expect(destination.searchParams.get('text')).toContain('Teste de integração');
  expect(destination.searchParams.get('text')).toContain('teste@example.com');
});

test('hero rotates all three texts, pauses, resumes, and resets the language', async ({ page }) => {
  await page.clock.install();
  await page.goto('/');
  await expect(page.locator('[data-rotation-next]')).toBeVisible();
  await expect(page.locator('h1 .hero-text-active [aria-hidden]').first()).toHaveCSS('opacity', '1');
  await page.locator('h1').hover();
  await page.clock.fastForward(7200);
  await expect(page.locator('.hero-slide-count')).toHaveText('02 / 04');
  await expect(page.locator('.eyebrow .hero-text-active')).toContainText('Interfaces feitas para pessoas');
  await expect(page.locator('h1 .hero-text-active')).toContainText('Menos atrito na tela.');
  await expect(page.locator('.hero-text .hero-text-active')).toContainText('Crio interfaces responsivas');
  await page.locator('[data-rotation-pause]').click();
  await page.clock.fastForward(15000);
  await expect(page.locator('.hero-slide-count')).toHaveText('02 / 04');
  await page.locator('[data-rotation-pause]').click();
  await expect(page.locator('[data-rotation-pause]')).toBeFocused();
  await page.clock.fastForward(7200);
  await expect(page.locator('.hero-slide-count')).toHaveText('03 / 04');
  await page.clock.fastForward(7200);
  await expect(page.locator('.hero-slide-count')).toHaveText('04 / 04');
  await page.clock.fastForward(7200);
  await expect(page.locator('.hero-slide-count')).toHaveText('01 / 04');
  await page.locator('[data-lang-btn="en"]').click();
  await expect(page.locator('.hero-slide-count')).toHaveText('01 / 04');
  await expect(page.locator('h1 .hero-text-active')).toContainText('Code that understands');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('h1 .hero-text-active [aria-hidden]')).toHaveCount(0);
  await page.clock.fastForward(7200);
  await expect(page.locator('.hero-slide-count')).toHaveText('02 / 04');
  await page.getByRole('button', { name: 'Next message' }).click();
  await expect(page.locator('.hero-slide-count')).toHaveText('03 / 04');
});

for (const width of [320, 390, 768, 1440]) {
  test(`all hero slides keep buttons stable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    for (const language of ['pt', 'en', 'es']) {
      await page.locator(`[data-lang-btn="${language}"]`).click();
      await page.locator('[data-rotation-pause]').click();
      const initial = await page.locator('.hero-actions').boundingBox();
      for (let slide = 0; slide < 4; slide++) {
        await expect(page.locator('.hero-slide-count')).toHaveText(`0${slide + 1} / 04`);
        const position = await page.locator('.hero-actions').boundingBox();
        expect(Math.abs(initial.y - position.y)).toBeLessThan(2);
        const overflow = await page.evaluate(() =>
          document.documentElement.scrollWidth > innerWidth ||
          document.querySelector('h1').scrollWidth > document.querySelector('h1').clientWidth
        );
        expect(overflow).toBe(false);
        await page.locator('[data-rotation-next]').click();
      }
      await expect(page.locator('.hero-slide-count')).toHaveText('01 / 04');
    }
  });
}
