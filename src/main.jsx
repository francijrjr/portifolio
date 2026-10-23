import '../script.js';
import {
  createIcons, ArrowDownRight, ArrowUpRight, ArrowUp, Brain, Compass,
  GitBranch, Github, LayoutGrid, Linkedin, Mail, MessageCircleMore,
  MonitorSmartphone, Send, Server, Terminal, User, Workflow,
} from 'lucide';
import { initTextEffects } from './text-effects.jsx';

createIcons({ icons: {
  ArrowDownRight, ArrowUpRight, ArrowUp, Brain, Compass, GitBranch,
  Github, LayoutGrid, Linkedin, Mail, MessageCircleMore,
  MonitorSmartphone, Send, Server, Terminal, User, Workflow,
} });

initTextEffects();
