import aiWritingIcon from '../../assets/products/writing_2327400 1.png';
import designPackIcon from '../../assets/products/design-tool.png';
import brandAssetIcon from '../../assets/products/portfolio.png';
import automationIcon from '../../assets/products/operation.png';
import socialKitIcon from '../../assets/products/social-media.png';
import ecommerceIcon from '../../assets/products/shopping-cart.png';

export const products = [
  {
    id: 1,
    name: 'AI Writing Pro',
    description: 'Generate landing page copy, product descriptions, and polished content briefs in less time.',
    price: 29,
    period: 'monthly',
    tag: 'Popular',
    tagType: 'popular',
    features: ['120+ prompt packs', 'Brand tone presets', 'Quick export workflow'],
    icon: aiWritingIcon,
  },
  {
    id: 2,
    name: 'Design Templates Pack',
    description: 'A complete set of modern templates for social posts, flyers, stories, and campaign assets.',
    price: 49,
    period: 'one-time',
    tag: 'Best Seller',
    tagType: 'best seller',
    features: ['350+ editable layouts', 'Figma ready files', 'Commercial use license'],
    icon: designPackIcon,
  },
  {
    id: 3,
    name: 'Premium Brand Assets',
    description: 'Upgrade presentations and client work with stylish mockups, icons, and ready-to-use visual kits.',
    price: 59,
    period: 'one-time',
    tag: 'New',
    tagType: 'new',
    features: ['Icon collection', 'Mockup scenes', 'Pitch deck visuals'],
    icon: brandAssetIcon,
  },
  {
    id: 4,
    name: 'Automation Toolkit',
    description: 'Speed up repetitive work with templates for workflows, handoffs, follow-ups, and process docs.',
    price: 19,
    period: 'monthly',
    tag: 'Popular',
    tagType: 'popular',
    features: ['Workflow blueprints', 'Team checklists', 'Zapier-ready guides'],
    icon: automationIcon,
  },
  {
    id: 5,
    name: 'Social Media Suite',
    description: 'Plan, write, and publish a full month of content with caption ideas and reusable asset bundles.',
    price: 39,
    period: 'monthly',
    tag: 'Best Seller',
    tagType: 'best seller',
    features: ['30-day planner', 'Caption bank', 'Analytics report sheet'],
    icon: socialKitIcon,
  },
  {
    id: 6,
    name: 'E-commerce Essentials',
    description: 'Everything needed for product launches, offer pages, upsell content, and store optimization.',
    price: 99,
    period: 'yearly',
    tag: 'New',
    tagType: 'new',
    features: ['Launch checklist', 'Offer page copy prompts', 'Retention campaign kit'],
    icon: ecommerceIcon,
  },
];
