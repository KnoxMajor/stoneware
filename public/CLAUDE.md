# Stoneware Design System - AI Reference

A complete, drop-in CSS design system. All classes use the `sw-` prefix to avoid conflicts.

## Quick Start

```html
<!-- Include the CSS -->
<link rel="stylesheet" href="stoneware.css">

<!-- Dark mode: add data-theme="dark" to html or body -->
<html data-theme="dark">
```

---

## Complete Class Reference

### Buttons

| Class | Description |
|-------|-------------|
| `sw-btn` | Base button styles (required) |
| `sw-btn-primary` | Dark filled button for primary actions |
| `sw-btn-secondary` | Outlined button for secondary actions |
| `sw-btn-danger` | Red button for destructive actions |
| `sw-btn-ghost` | Transparent button, shows bg on hover |
| `sw-btn-icon` | Square button for icons only (6px padding) |
| `sw-btn-sm` | Small size (6px 12px padding) |
| `sw-btn-lg` | Large size (14px 24px padding) |

```html
<button class="sw-btn sw-btn-primary">Save</button>
<button class="sw-btn sw-btn-secondary">Cancel</button>
<button class="sw-btn sw-btn-danger">Delete</button>
<button class="sw-btn sw-btn-ghost">More</button>
<button class="sw-btn sw-btn-icon"><svg>...</svg></button>
<button class="sw-btn sw-btn-primary sw-btn-sm">Small</button>
```

### Inputs

| Class | Description |
|-------|-------------|
| `sw-input` | Text input field |
| `sw-input-group` | Wrapper for input + icon/button combos |
| `sw-textarea` | Multi-line text input |
| `sw-select` | Dropdown select |
| `sw-checkbox` | Styled checkbox |
| `sw-radio` | Styled radio button |
| `sw-select-option` | Clickable card-style option (for custom selects) |
| `sw-select-option.selected` | Selected state for select-option |

```html
<input type="text" class="sw-input" placeholder="Enter text...">

<div class="sw-input-group">
  <svg><!-- icon --></svg>
  <input type="text" class="sw-input" placeholder="Search...">
</div>

<textarea class="sw-textarea" placeholder="Message..."></textarea>

<select class="sw-select">
  <option>Option 1</option>
</select>

<input type="checkbox" class="sw-checkbox">
<input type="radio" class="sw-radio">

<div class="sw-select-option selected">
  <input type="radio" class="sw-radio" checked>
  <label>Selected Option</label>
</div>
```

### Cards

| Class | Description |
|-------|-------------|
| `sw-card` | Base card with shadow and padding |
| `sw-card-sm` | Smaller padding variant |
| `sw-card-bordered` | Border instead of shadow |
| `sw-card-elevated` | Stronger shadow |
| `sw-card-header` | Container for title area |
| `sw-card-title` | Main card heading |
| `sw-card-subtitle` | Secondary text below title |
| `sw-card-content` | Main content area |
| `sw-card-footer` | Bottom area, flex with gap |

```html
<div class="sw-card">
  <div class="sw-card-header">
    <h2 class="sw-card-title">Card Title</h2>
    <p class="sw-card-subtitle">Optional subtitle text</p>
  </div>
  <div class="sw-card-content">
    <p>Card content goes here.</p>
  </div>
  <div class="sw-card-footer">
    <button class="sw-btn sw-btn-secondary">Cancel</button>
    <button class="sw-btn sw-btn-primary">Save</button>
  </div>
</div>
```

### Modals

| Class | Description |
|-------|-------------|
| `sw-modal-overlay` | Full-screen backdrop (hidden by default) |
| `sw-modal-overlay.active` | Shows the modal |

```html
<div class="sw-modal-overlay active">
  <div class="sw-card">
    <h2 class="sw-card-title">Modal Title</h2>
    <div class="sw-card-content">
      <p>Modal content here.</p>
    </div>
    <div class="sw-card-footer">
      <button class="sw-btn sw-btn-secondary">Cancel</button>
      <button class="sw-btn sw-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Chat Messages

| Class | Description |
|-------|-------------|
| `sw-chat-message` | Message container |
| `sw-chat-message.user` | Right-aligned user message |
| `sw-chat-message.assistant` | Left-aligned assistant message |
| `sw-message-bubble` | The actual message bubble |

```html
<div class="sw-chat-message user">
  <div class="sw-message-bubble">Hello, how can you help?</div>
</div>
<div class="sw-chat-message assistant">
  <div class="sw-message-bubble">I'm here to assist you!</div>
</div>
```

### Panels & Sidebars

| Class | Description |
|-------|-------------|
| `sw-panel` | Full-height panel container |
| `sw-panel-header` | Top header with border |
| `sw-panel-title` | Uppercase panel title |
| `sw-panel-content` | Scrollable content area |

```html
<div class="sw-panel">
  <div class="sw-panel-header">
    <span class="sw-panel-title">Panel Title</span>
    <button class="sw-btn sw-btn-icon">×</button>
  </div>
  <div class="sw-panel-content">
    <!-- Panel content -->
  </div>
</div>
```

### Collapsible Modules

| Class | Description |
|-------|-------------|
| `sw-module` | Collapsible section container |
| `sw-module.expanded` | Expanded state (shows content) |
| `sw-module-header` | Clickable header |
| `sw-module-title` | Title with icon |
| `sw-module-icon` | Icon in title (20x20) |
| `sw-module-chevron` | Expand/collapse arrow |
| `sw-module-content` | Hidden content area |

```html
<div class="sw-module expanded">
  <div class="sw-module-header">
    <div class="sw-module-title">
      <svg class="sw-module-icon">...</svg>
      Section Title
    </div>
    <svg class="sw-module-chevron">...</svg>
  </div>
  <div class="sw-module-content">
    <p>Collapsible content here.</p>
  </div>
</div>
```

### List Items

| Class | Description |
|-------|-------------|
| `sw-list-item` | Clickable list item |
| `sw-list-item.active` | Active/selected state |
| `sw-list-item-icon` | Left icon |
| `sw-list-item-content` | Content wrapper |
| `sw-list-item-title` | Item title |
| `sw-list-item-meta` | Secondary text (date, etc.) |

```html
<div class="sw-list-item active">
  <svg class="sw-list-item-icon">...</svg>
  <div class="sw-list-item-content">
    <div class="sw-list-item-title">Item Title</div>
    <div class="sw-list-item-meta">2 hours ago</div>
  </div>
</div>
```

### Chips & Tags

| Class | Description |
|-------|-------------|
| `sw-chip` | Clickable chip/pill |
| `sw-chip-sm` | Smaller chip variant |
| `sw-tag` | Non-interactive label tag |
| `sw-tag-success` | Green tag |
| `sw-tag-warning` | Orange/amber tag |
| `sw-tag-danger` | Red tag |

```html
<span class="sw-chip">Clickable Chip</span>
<span class="sw-chip sw-chip-sm">Small Chip</span>

<span class="sw-tag">Default</span>
<span class="sw-tag sw-tag-success">Success</span>
<span class="sw-tag sw-tag-warning">Warning</span>
<span class="sw-tag sw-tag-danger">Error</span>
```

### Progress Indicators

| Class | Description |
|-------|-------------|
| `sw-progress-dots` | Dot container (flex, centered) |
| `sw-progress-dot` | Individual dot |
| `sw-progress-dot.active` | Current step (wider) |
| `sw-progress-dot.completed` | Completed step (gray) |
| `sw-spinner` | Loading spinner (50x50) |
| `sw-spinner-sm` | Small spinner (24x24) |

```html
<div class="sw-progress-dots">
  <div class="sw-progress-dot completed"></div>
  <div class="sw-progress-dot active"></div>
  <div class="sw-progress-dot"></div>
</div>

<div class="sw-spinner"></div>
<div class="sw-spinner sw-spinner-sm"></div>
```

### Banners & Alerts

| Class | Description |
|-------|-------------|
| `sw-banner` | Base banner container |
| `sw-banner-success` | Green success banner |
| `sw-banner-warning` | Amber warning banner |
| `sw-banner-danger` | Red error banner |
| `sw-banner-text` | Banner message text |
| `sw-banner-actions` | Button container |
| `sw-btn-outline` | Outline button for banners |

```html
<div class="sw-banner sw-banner-warning">
  <span class="sw-banner-text">Warning: Action required</span>
  <div class="sw-banner-actions">
    <button class="sw-btn sw-btn-sm sw-btn-outline">Dismiss</button>
  </div>
</div>

<div class="sw-banner sw-banner-success">
  <span class="sw-banner-text">Success! Changes saved.</span>
</div>

<div class="sw-banner sw-banner-danger">
  <span class="sw-banner-text">Error: Something went wrong.</span>
</div>
```

### Avatars

| Class | Description |
|-------|-------------|
| `sw-avatar` | Base avatar (40x40) |
| `sw-avatar-xs` | Extra small (24x24) |
| `sw-avatar-sm` | Small (28x28) |
| `sw-avatar-lg` | Large (56x56) |
| `sw-avatar-group` | Stacked avatar container |

```html
<div class="sw-avatar">JD</div>
<div class="sw-avatar"><img src="photo.jpg" alt=""></div>

<div class="sw-avatar-group">
  <div class="sw-avatar">A</div>
  <div class="sw-avatar">B</div>
  <div class="sw-avatar">C</div>
</div>
```

### Dividers

| Class | Description |
|-------|-------------|
| `sw-divider` | Horizontal line (24px margin) |
| `sw-divider-sm` | Smaller margin (12px) |

```html
<div class="sw-divider"></div>
<div class="sw-divider-sm"></div>
```

### Navigation

| Class | Description |
|-------|-------------|
| `sw-nav` | Navigation container (vertical flex) |
| `sw-nav-item` | Navigation link/button |
| `sw-nav-item.active` | Active nav item |
| `sw-nav-item-icon` | Icon in nav item (20x20) |
| `sw-nav-section` | Section header (uppercase) |

```html
<nav class="sw-nav">
  <div class="sw-nav-section">Main</div>
  <a class="sw-nav-item active">
    <svg class="sw-nav-item-icon">...</svg>
    Dashboard
  </a>
  <a class="sw-nav-item">
    <svg class="sw-nav-item-icon">...</svg>
    Settings
  </a>
</nav>
```

### Field Grid (Data Display)

| Class | Description |
|-------|-------------|
| `sw-field-grid` | Auto-fit grid for data fields |
| `sw-field` | Field container (label + value) |
| `sw-field-label` | Uppercase label |
| `sw-field-value` | Value text |

```html
<div class="sw-field-grid">
  <div class="sw-field">
    <span class="sw-field-label">Name</span>
    <span class="sw-field-value">John Doe</span>
  </div>
  <div class="sw-field">
    <span class="sw-field-label">Email</span>
    <span class="sw-field-value">john@example.com</span>
  </div>
</div>
```

### Typography Classes

| Class | Description |
|-------|-------------|
| `sw-heading-xl` | Extra large heading (28px) |
| `sw-heading-lg` | Large heading (24px) |
| `sw-heading-md` | Medium heading (18px) |
| `sw-heading-sm` | Small heading (15px) |
| `sw-text-body` | Body text (14px, secondary color) |
| `sw-text-small` | Small text (13px, tertiary color) |
| `sw-text-caption` | Caption text (12px, muted) |
| `sw-label` | Uppercase label (11px) |

### Utility Classes

**Display:**
| Class | CSS |
|-------|-----|
| `sw-hidden` | `display: none` |
| `sw-flex` | `display: flex` |
| `sw-inline-flex` | `display: inline-flex` |
| `sw-grid` | `display: grid` |
| `sw-block` | `display: block` |

**Flexbox:**
| Class | CSS |
|-------|-----|
| `sw-flex-col` | `flex-direction: column` |
| `sw-flex-row` | `flex-direction: row` |
| `sw-items-center` | `align-items: center` |
| `sw-items-start` | `align-items: flex-start` |
| `sw-items-end` | `align-items: flex-end` |
| `sw-justify-center` | `justify-content: center` |
| `sw-justify-between` | `justify-content: space-between` |
| `sw-justify-end` | `justify-content: flex-end` |
| `sw-flex-1` | `flex: 1` |
| `sw-flex-wrap` | `flex-wrap: wrap` |

**Gap:**
| Class | Value |
|-------|-------|
| `sw-gap-1` | 4px |
| `sw-gap-2` | 8px |
| `sw-gap-3` | 12px |
| `sw-gap-4` | 16px |
| `sw-gap-5` | 20px |
| `sw-gap-6` | 24px |

**Padding:**
| Class | Value |
|-------|-------|
| `sw-p-0` to `sw-p-6` | 0 to 24px |
| `sw-px-4` | 16px left/right |
| `sw-py-4` | 16px top/bottom |

**Margin:**
| Class | Value |
|-------|-------|
| `sw-m-0` | 0 |
| `sw-mb-1` to `sw-mb-6` | 4px to 24px bottom |
| `sw-mt-4`, `sw-mt-6` | 16px, 24px top |

**Text:**
| Class | Effect |
|-------|--------|
| `sw-text-center` | Center align |
| `sw-text-left` | Left align |
| `sw-text-right` | Right align |
| `sw-text-primary` | Primary text color |
| `sw-text-secondary` | Secondary text color |
| `sw-text-tertiary` | Tertiary text color |
| `sw-text-muted` | Muted text color |
| `sw-font-normal` | 400 weight |
| `sw-font-medium` | 500 weight |
| `sw-font-semibold` | 600 weight |
| `sw-font-bold` | 700 weight |
| `sw-truncate` | Ellipsis overflow |
| `sw-line-clamp-2` | Clamp to 2 lines |
| `sw-line-clamp-3` | Clamp to 3 lines |

**Other:**
| Class | Effect |
|-------|--------|
| `sw-overflow-hidden` | Hide overflow |
| `sw-overflow-auto` | Auto scroll |
| `sw-overflow-y-auto` | Vertical scroll |
| `sw-w-full` | 100% width |
| `sw-h-full` | 100% height |
| `sw-min-h-screen` | 100vh min-height |
| `sw-cursor-pointer` | Pointer cursor |
| `sw-transition` | Fast transition (0.15s) |
| `sw-transition-slow` | Slow transition (0.3s) |
| `sw-rounded` | 6px radius |
| `sw-rounded-lg` | 8px radius |
| `sw-rounded-xl` | 10px radius |
| `sw-rounded-full` | Pill shape |
| `sw-bg-page` | Page background |
| `sw-bg-card` | Card background |
| `sw-bg-hover` | Hover background |

---

## Design Tokens Reference

### Colors - Neutrals
```css
--sw-white: #ffffff
--sw-gray-50: #fafafa
--sw-gray-100: #f4f4f5
--sw-gray-200: #e4e4e7
--sw-gray-300: #d4d4d8
--sw-gray-400: #a1a1aa
--sw-gray-500: #71717a
--sw-gray-600: #52525b
--sw-gray-700: #3f3f46
--sw-gray-800: #27272a
--sw-gray-900: #18181b
--sw-black: #0a0a0a
```

### Colors - Primary
```css
--sw-primary: #18181b          /* Light: dark, Dark: light */
--sw-primary-hover: #27272a
--sw-primary-active: #3f3f46
```

### Colors - Accent
```css
--sw-accent: #1c8ece
--sw-accent-light: #61a9d9
--sw-accent-bg: #eff6ff
```

### Colors - Semantic
```css
/* Success */
--sw-success: #16a34a
--sw-success-bg: #f0fdf4
--sw-success-border: #86efac

/* Warning */
--sw-warning: #d97706
--sw-warning-bg: #fef3c7
--sw-warning-border: #fcd34d
--sw-warning-text: #92400e

/* Danger */
--sw-danger: #dc2626
--sw-danger-hover: #b91c1c
--sw-danger-bg: #fef2f2
--sw-danger-border: #fecaca
```

### Background Colors
```css
--sw-bg-page: #f9fafb           /* Page background */
--sw-bg-card: #ffffff           /* Card background */
--sw-bg-elevated: #ffffff       /* Elevated surfaces */
--sw-bg-input: #fafafa          /* Input background */
--sw-bg-input-focus: #ffffff    /* Focused input */
--sw-bg-hover: #f4f4f5          /* Hover state */
--sw-bg-selected: #fafafa       /* Selected state */
--sw-card-footer-bg: #f9fafb    /* Card footer */
```

### Text Colors
```css
--sw-text-primary: #0a0a0a      /* Main text */
--sw-text-secondary: #52525b    /* Secondary text */
--sw-text-tertiary: #71717a     /* Tertiary text */
--sw-text-muted: #a1a1aa        /* Muted/placeholder */
--sw-text-inverse: #ffffff      /* On dark backgrounds */
```

### Border Colors
```css
--sw-border-default: #e4e4e7
--sw-border-hover: #d4d4d8
--sw-border-focus: #18181b
--sw-border-selected: #18181b
```

### Typography
```css
/* Font Family */
--sw-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif

/* Sizes */
--sw-text-xs: 11px
--sw-text-sm: 12px
--sw-text-base: 13px
--sw-text-md: 14px
--sw-text-lg: 15px
--sw-text-xl: 16px
--sw-text-2xl: 18px
--sw-text-3xl: 20px
--sw-text-4xl: 24px
--sw-text-5xl: 28px

/* Weights */
--sw-font-normal: 400
--sw-font-medium: 500
--sw-font-semibold: 600
--sw-font-bold: 700

/* Line Heights */
--sw-leading-tight: 1.25
--sw-leading-snug: 1.375
--sw-leading-normal: 1.5
--sw-leading-relaxed: 1.625
```

### Spacing Scale (Base 4px)
```css
--sw-space-1: 4px
--sw-space-2: 8px
--sw-space-3: 12px
--sw-space-4: 16px
--sw-space-5: 20px
--sw-space-6: 24px
--sw-space-8: 32px
--sw-space-10: 40px
--sw-space-12: 48px
```

### Border Radius
```css
--sw-radius-sm: 4px
--sw-radius-md: 6px
--sw-radius-lg: 8px
--sw-radius-xl: 10px
--sw-radius-2xl: 12px
--sw-radius-3xl: 16px
--sw-radius-full: 9999px
```

### Shadows
```css
--sw-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--sw-shadow-md: 0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.05)
--sw-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)
--sw-shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.2)
```

### Transitions
```css
--sw-transition-fast: 0.15s ease
--sw-transition-normal: 0.2s ease
--sw-transition-slow: 0.3s ease
--sw-transition-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1)
```

### Z-Index Scale
```css
--sw-z-base: 1
--sw-z-dropdown: 10
--sw-z-sticky: 20
--sw-z-overlay: 100
--sw-z-modal: 200
--sw-z-toast: 300
```

---

## Common Patterns (Copy-Paste Snippets)

### Basic Card with Actions

```html
<div class="sw-card">
  <div class="sw-card-header">
    <h2 class="sw-card-title">Settings</h2>
    <p class="sw-card-subtitle">Manage your account preferences</p>
  </div>
  <div class="sw-card-content">
    <div class="sw-field-grid">
      <div class="sw-field">
        <span class="sw-field-label">Username</span>
        <span class="sw-field-value">johndoe</span>
      </div>
      <div class="sw-field">
        <span class="sw-field-label">Email</span>
        <span class="sw-field-value">john@example.com</span>
      </div>
    </div>
  </div>
  <div class="sw-card-footer">
    <button class="sw-btn sw-btn-secondary">Cancel</button>
    <button class="sw-btn sw-btn-primary">Save Changes</button>
  </div>
</div>
```

### Modal Dialog

```html
<div class="sw-modal-overlay active">
  <div class="sw-card" style="max-width: 400px; width: 100%;">
    <h2 class="sw-card-title">Confirm Delete</h2>
    <div class="sw-card-content">
      <p class="sw-text-body">Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    <div class="sw-card-footer sw-justify-end">
      <button class="sw-btn sw-btn-secondary">Cancel</button>
      <button class="sw-btn sw-btn-danger">Delete</button>
    </div>
  </div>
</div>
```

### Form with Inputs

```html
<div class="sw-card">
  <h2 class="sw-card-title">Contact Form</h2>
  <form class="sw-flex sw-flex-col sw-gap-4 sw-mt-4">
    <div class="sw-field">
      <label class="sw-field-label">Name</label>
      <input type="text" class="sw-input" placeholder="Your name">
    </div>
    <div class="sw-field">
      <label class="sw-field-label">Email</label>
      <input type="email" class="sw-input" placeholder="you@example.com">
    </div>
    <div class="sw-field">
      <label class="sw-field-label">Message</label>
      <textarea class="sw-textarea" placeholder="Your message..."></textarea>
    </div>
    <div class="sw-flex sw-gap-3 sw-justify-end">
      <button type="button" class="sw-btn sw-btn-secondary">Cancel</button>
      <button type="submit" class="sw-btn sw-btn-primary">Send</button>
    </div>
  </form>
</div>
```

### Navigation Sidebar

```html
<aside class="sw-panel" style="width: 260px;">
  <div class="sw-panel-header">
    <span class="sw-panel-title">Navigation</span>
  </div>
  <div class="sw-panel-content">
    <nav class="sw-nav">
      <div class="sw-nav-section">Main</div>
      <a href="#" class="sw-nav-item active">
        <svg class="sw-nav-item-icon" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
        Dashboard
      </a>
      <a href="#" class="sw-nav-item">
        <svg class="sw-nav-item-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
        Settings
      </a>
      <div class="sw-nav-section">Account</div>
      <a href="#" class="sw-nav-item">Profile</a>
      <a href="#" class="sw-nav-item">Billing</a>
    </nav>
  </div>
</aside>
```

### Chat Interface

```html
<div class="sw-panel" style="height: 500px;">
  <div class="sw-panel-header">
    <span class="sw-panel-title">Chat</span>
  </div>
  <div class="sw-panel-content sw-flex sw-flex-col">
    <div class="sw-flex-1 sw-overflow-y-auto">
      <div class="sw-chat-message user">
        <div class="sw-message-bubble">Hello! How can you help me today?</div>
      </div>
      <div class="sw-chat-message assistant">
        <div class="sw-message-bubble">Hi! I'm here to assist you with any questions.</div>
      </div>
      <div class="sw-chat-message user">
        <div class="sw-message-bubble">Can you explain how this works?</div>
      </div>
    </div>
    <div class="sw-input-group sw-mt-4">
      <input type="text" class="sw-input" placeholder="Type a message...">
      <button class="sw-btn sw-btn-primary sw-btn-sm">Send</button>
    </div>
  </div>
</div>
```

### User List with Avatars

```html
<div class="sw-card">
  <h2 class="sw-card-title">Team Members</h2>
  <div class="sw-mt-4">
    <div class="sw-list-item">
      <div class="sw-avatar">JD</div>
      <div class="sw-list-item-content">
        <div class="sw-list-item-title">John Doe</div>
        <div class="sw-list-item-meta">Administrator</div>
      </div>
      <span class="sw-tag sw-tag-success">Active</span>
    </div>
    <div class="sw-list-item">
      <div class="sw-avatar">AS</div>
      <div class="sw-list-item-content">
        <div class="sw-list-item-title">Alice Smith</div>
        <div class="sw-list-item-meta">Developer</div>
      </div>
      <span class="sw-tag sw-tag-success">Active</span>
    </div>
    <div class="sw-list-item">
      <div class="sw-avatar">BJ</div>
      <div class="sw-list-item-content">
        <div class="sw-list-item-title">Bob Johnson</div>
        <div class="sw-list-item-meta">Designer</div>
      </div>
      <span class="sw-tag">Offline</span>
    </div>
  </div>
</div>
```

### Alert Banners

```html
<div class="sw-flex sw-flex-col sw-gap-3">
  <div class="sw-banner sw-banner-success">
    <span class="sw-banner-text">Changes saved successfully!</span>
    <div class="sw-banner-actions">
      <button class="sw-btn sw-btn-sm sw-btn-outline">View</button>
    </div>
  </div>

  <div class="sw-banner sw-banner-warning">
    <span class="sw-banner-text">Your session will expire in 5 minutes.</span>
    <div class="sw-banner-actions">
      <button class="sw-btn sw-btn-sm sw-btn-outline">Extend</button>
    </div>
  </div>

  <div class="sw-banner sw-banner-danger">
    <span class="sw-banner-text">Failed to connect to server.</span>
    <div class="sw-banner-actions">
      <button class="sw-btn sw-btn-sm sw-btn-outline">Retry</button>
    </div>
  </div>
</div>
```

### Data Display Card

```html
<div class="sw-card">
  <div class="sw-flex sw-items-center sw-justify-between sw-mb-4">
    <h2 class="sw-card-title">Order Details</h2>
    <span class="sw-tag sw-tag-success">Completed</span>
  </div>
  <div class="sw-field-grid">
    <div class="sw-field">
      <span class="sw-field-label">Order ID</span>
      <span class="sw-field-value">#12345</span>
    </div>
    <div class="sw-field">
      <span class="sw-field-label">Date</span>
      <span class="sw-field-value">Jan 15, 2025</span>
    </div>
    <div class="sw-field">
      <span class="sw-field-label">Customer</span>
      <span class="sw-field-value">John Doe</span>
    </div>
    <div class="sw-field">
      <span class="sw-field-label">Total</span>
      <span class="sw-field-value">$299.00</span>
    </div>
  </div>
  <div class="sw-divider"></div>
  <div class="sw-card-footer">
    <button class="sw-btn sw-btn-secondary">Print</button>
    <button class="sw-btn sw-btn-primary">View Invoice</button>
  </div>
</div>
```

---

## Style Guidelines

### Button Usage

| Variant | Use For |
|---------|---------|
| `sw-btn-primary` | Primary actions: Save, Submit, Confirm, Create |
| `sw-btn-secondary` | Secondary actions: Cancel, Back, Close |
| `sw-btn-danger` | Destructive actions: Delete, Remove, Clear |
| `sw-btn-ghost` | Tertiary actions: More options, Less important actions |
| `sw-btn-icon` | Icon-only buttons: Close (×), Menu, Settings |

### Card Composition

- Use `sw-card-header` with `sw-card-title` and optional `sw-card-subtitle` for card headings
- Put main content in `sw-card-content`
- Put action buttons in `sw-card-footer`
- Use `sw-card-sm` for compact cards in lists or sidebars
- Use `sw-card-bordered` when you want less visual emphasis (no shadow)

### Spacing Conventions

- `sw-gap-2` (8px): Between related items (buttons in a group)
- `sw-gap-3` (12px): Between form fields, list items
- `sw-gap-4` (16px): Between sections within a component
- `sw-gap-6` (24px): Between major sections
- `sw-mb-4` to `sw-mb-6`: For vertical spacing between blocks

### Color Usage

- **Primary text** (`sw-text-primary`): Headings, important content
- **Secondary text** (`sw-text-secondary`): Body text, descriptions
- **Tertiary text** (`sw-text-tertiary`): Labels, less important info
- **Muted text** (`sw-text-muted`): Placeholders, disabled content

- **Success** (green): Confirmations, completed states, positive feedback
- **Warning** (amber): Cautions, pending states, important notices
- **Danger** (red): Errors, destructive actions, critical alerts

### Responsive Considerations

- Cards and panels are fluid by default
- Use `sw-w-full` to ensure full-width on mobile
- `sw-field-grid` auto-fits columns based on available width
- Consider `sw-flex-col` on mobile for horizontal layouts
- Modal cards should have `max-width` and `width: 100%` for responsive sizing

---

## Full CSS Reference

The complete stoneware.css is embedded below for reference:

```css
/**
 * STONEWARE DESIGN SYSTEM
 * Full bundle: Reset + Tokens + Base Styles + Components + Utilities
 *
 * Drop this single file into your project to transform your UI instantly.
 * All classes use the `sw-` prefix to avoid conflicts.
 */

/* ==========================================================================
   1. CSS RESET
   ========================================================================== */

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  line-height: 1.5;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

ul, ol {
  list-style: none;
}


/* ==========================================================================
   2. DESIGN TOKENS (CSS Custom Properties)
   ========================================================================== */

:root {
  /* Colors - Neutrals */
  --sw-white: #ffffff;
  --sw-gray-50: #fafafa;
  --sw-gray-100: #f4f4f5;
  --sw-gray-200: #e4e4e7;
  --sw-gray-300: #d4d4d8;
  --sw-gray-400: #a1a1aa;
  --sw-gray-500: #71717a;
  --sw-gray-600: #52525b;
  --sw-gray-700: #3f3f46;
  --sw-gray-800: #27272a;
  --sw-gray-900: #18181b;
  --sw-black: #0a0a0a;

  /* Colors - Primary */
  --sw-primary: #18181b;
  --sw-primary-hover: #27272a;
  --sw-primary-active: #3f3f46;

  /* Colors - Accent */
  --sw-accent: #1c8ece;
  --sw-accent-light: #61a9d9;
  --sw-accent-bg: #eff6ff;

  /* Colors - Semantic */
  --sw-success: #16a34a;
  --sw-success-bg: #f0fdf4;
  --sw-success-border: #86efac;
  --sw-warning: #d97706;
  --sw-warning-bg: #fef3c7;
  --sw-warning-border: #fcd34d;
  --sw-warning-text: #92400e;
  --sw-danger: #dc2626;
  --sw-danger-hover: #b91c1c;
  --sw-danger-bg: #fef2f2;
  --sw-danger-border: #fecaca;

  /* Background Colors */
  --sw-bg-page: #f9fafb;
  --sw-bg-card: #ffffff;
  --sw-bg-elevated: #ffffff;
  --sw-bg-input: #fafafa;
  --sw-bg-input-focus: #ffffff;
  --sw-bg-hover: #f4f4f5;
  --sw-bg-selected: #fafafa;
  --sw-card-footer-bg: #f9fafb;

  /* Text Colors */
  --sw-text-primary: #0a0a0a;
  --sw-text-secondary: #52525b;
  --sw-text-tertiary: #71717a;
  --sw-text-muted: #a1a1aa;
  --sw-text-inverse: #ffffff;

  /* Border Colors */
  --sw-border-default: #e4e4e7;
  --sw-border-hover: #d4d4d8;
  --sw-border-focus: #18181b;
  --sw-border-selected: #18181b;

  /* Typography */
  --sw-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --sw-text-xs: 11px;
  --sw-text-sm: 12px;
  --sw-text-base: 13px;
  --sw-text-md: 14px;
  --sw-text-lg: 15px;
  --sw-text-xl: 16px;
  --sw-text-2xl: 18px;
  --sw-text-3xl: 20px;
  --sw-text-4xl: 24px;
  --sw-text-5xl: 28px;
  --sw-font-normal: 400;
  --sw-font-medium: 500;
  --sw-font-semibold: 600;
  --sw-font-bold: 700;
  --sw-leading-tight: 1.25;
  --sw-leading-snug: 1.375;
  --sw-leading-normal: 1.5;
  --sw-leading-relaxed: 1.625;

  /* Spacing */
  --sw-space-1: 4px;
  --sw-space-2: 8px;
  --sw-space-3: 12px;
  --sw-space-4: 16px;
  --sw-space-5: 20px;
  --sw-space-6: 24px;
  --sw-space-8: 32px;
  --sw-space-10: 40px;
  --sw-space-12: 48px;

  /* Border Radius */
  --sw-radius-sm: 4px;
  --sw-radius-md: 6px;
  --sw-radius-lg: 8px;
  --sw-radius-xl: 10px;
  --sw-radius-2xl: 12px;
  --sw-radius-3xl: 16px;
  --sw-radius-full: 9999px;

  /* Shadows */
  --sw-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --sw-shadow-md: 0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(0, 0, 0, 0.05);
  --sw-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  --sw-shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.2);

  /* Transitions */
  --sw-transition-fast: 0.15s ease;
  --sw-transition-normal: 0.2s ease;
  --sw-transition-slow: 0.3s ease;
  --sw-transition-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-Index */
  --sw-z-base: 1;
  --sw-z-dropdown: 10;
  --sw-z-sticky: 20;
  --sw-z-overlay: 100;
  --sw-z-modal: 200;
  --sw-z-toast: 300;
}

/* Dark Mode */
[data-theme="dark"] {
  --sw-bg-page: #121214;
  --sw-bg-card: #18181b;
  --sw-bg-elevated: #27272a;
  --sw-bg-input: #27272a;
  --sw-bg-input-focus: #3f3f46;
  --sw-bg-hover: #27272a;
  --sw-bg-selected: #27272a;
  --sw-text-primary: #fafafa;
  --sw-text-secondary: #a1a1aa;
  --sw-text-tertiary: #71717a;
  --sw-text-muted: #52525b;
  --sw-text-inverse: #0a0a0a;
  --sw-border-default: #3f3f46;
  --sw-border-hover: #52525b;
  --sw-border-focus: #fafafa;
  --sw-border-selected: #fafafa;
  --sw-primary: #fafafa;
  --sw-primary-hover: #e4e4e7;
  --sw-primary-active: #d4d4d8;
  --sw-success-bg: #052e16;
  --sw-warning-bg: #431407;
  --sw-danger-bg: #450a0a;
  --sw-accent-bg: #1e3a5f;
  --sw-card-footer-bg: #27272a;
}


/* ==========================================================================
   3. BASE ELEMENT STYLES
   ========================================================================== */

body {
  font-family: var(--sw-font-family);
  font-size: var(--sw-text-md);
  font-weight: var(--sw-font-normal);
  line-height: var(--sw-leading-normal);
  color: var(--sw-text-primary);
  background: var(--sw-bg-page);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--sw-font-semibold);
  line-height: var(--sw-leading-tight);
  color: var(--sw-text-primary);
}

h1 { font-size: var(--sw-text-5xl); }
h2 { font-size: var(--sw-text-4xl); }
h3 { font-size: var(--sw-text-2xl); }
h4 { font-size: var(--sw-text-lg); }
h5 { font-size: var(--sw-text-md); }
h6 { font-size: var(--sw-text-sm); }

p {
  color: var(--sw-text-secondary);
  line-height: var(--sw-leading-relaxed);
}

a:hover {
  color: var(--sw-text-primary);
}

small {
  font-size: var(--sw-text-sm);
  color: var(--sw-text-muted);
}


/* ==========================================================================
   4. TYPOGRAPHY CLASSES
   ========================================================================== */

.sw-heading-xl {
  font-size: var(--sw-text-5xl);
  font-weight: var(--sw-font-semibold);
  line-height: var(--sw-leading-tight);
  color: var(--sw-text-primary);
}

.sw-heading-lg {
  font-size: var(--sw-text-4xl);
  font-weight: var(--sw-font-semibold);
  line-height: var(--sw-leading-tight);
  color: var(--sw-text-primary);
}

.sw-heading-md {
  font-size: var(--sw-text-2xl);
  font-weight: var(--sw-font-semibold);
  line-height: var(--sw-leading-snug);
  color: var(--sw-text-primary);
}

.sw-heading-sm {
  font-size: var(--sw-text-lg);
  font-weight: var(--sw-font-semibold);
  line-height: var(--sw-leading-snug);
  color: var(--sw-text-primary);
}

.sw-text-body {
  font-size: var(--sw-text-md);
  color: var(--sw-text-secondary);
  line-height: var(--sw-leading-relaxed);
}

.sw-text-small {
  font-size: var(--sw-text-base);
  color: var(--sw-text-tertiary);
  line-height: var(--sw-leading-normal);
}

.sw-text-caption {
  font-size: var(--sw-text-sm);
  color: var(--sw-text-muted);
  line-height: var(--sw-leading-normal);
}

.sw-label {
  font-size: var(--sw-text-xs);
  font-weight: var(--sw-font-semibold);
  color: var(--sw-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}


/* ==========================================================================
   5. BUTTONS
   ========================================================================== */

.sw-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sw-space-3);
  padding: 11px 20px;
  border-radius: var(--sw-radius-lg);
  font-family: var(--sw-font-family);
  font-size: var(--sw-text-lg);
  font-weight: var(--sw-font-medium);
  line-height: 1;
  cursor: pointer;
  transition: all var(--sw-transition-fast);
  border: none;
  outline: none;
  text-decoration: none;
}

/* Primary Button (Dark) */
.sw-btn-primary {
  background: var(--sw-primary);
  color: var(--sw-text-inverse) !important;
  border: 1.5px solid var(--sw-primary);
}

.sw-btn-primary:hover:not(:disabled) {
  background: var(--sw-primary-hover);
}

.sw-btn-primary:active:not(:disabled) {
  background: var(--sw-primary-active);
}

.sw-btn-primary:disabled {
  background: var(--sw-gray-200);
  border-color: var(--sw-gray-200);
  color: var(--sw-text-muted);
  cursor: not-allowed;
}

/* Secondary Button (Outlined) */
.sw-btn-secondary {
  background: transparent;
  color: var(--sw-text-secondary);
  border: 1.5px solid var(--sw-border-default);
}

.sw-btn-secondary:hover:not(:disabled) {
  background: var(--sw-bg-hover);
  border-color: var(--sw-border-hover);
}

.sw-btn-secondary:disabled {
  background: transparent;
  border-color: var(--sw-gray-200);
  color: var(--sw-text-muted);
  cursor: not-allowed;
}

/* Danger Button */
.sw-btn-danger {
  background: var(--sw-danger);
  color: var(--sw-gray-50);
  border: 1.5px solid var(--sw-danger);
}

.sw-btn-danger:hover:not(:disabled) {
  background: var(--sw-danger-hover);
}

.sw-btn-danger:disabled {
  background: var(--sw-gray-200);
  border-color: var(--sw-gray-200);
  color: var(--sw-text-muted);
  cursor: not-allowed;
}

/* Ghost Button */
.sw-btn-ghost {
  background: transparent;
  color: var(--sw-text-secondary);
}

.sw-btn-ghost:hover:not(:disabled) {
  background: var(--sw-bg-hover);
  color: var(--sw-text-primary);
}

/* Icon Button */
.sw-btn-icon {
  padding: 6px;
  background: transparent;
  border: 1px solid var(--sw-border-default);
  border-radius: var(--sw-radius-md);
  color: var(--sw-text-tertiary);
}

.sw-btn-icon:hover:not(:disabled) {
  background: var(--sw-bg-hover);
  border-color: var(--sw-border-hover);
  color: var(--sw-text-primary);
}

/* Button Sizes */
.sw-btn-sm {
  padding: 6px 12px;
  font-size: var(--sw-text-sm);
  border-radius: var(--sw-radius-md);
}

.sw-btn-lg {
  padding: 14px 24px;
  font-size: var(--sw-text-xl);
}


/* ==========================================================================
   6. FORM INPUTS
   ========================================================================== */

.sw-input {
  width: 100%;
  padding: 10px 14px;
  background: var(--sw-bg-input);
  border: 1.5px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  font-family: var(--sw-font-family);
  font-size: var(--sw-text-md);
  line-height: 1;
  color: var(--sw-text-primary);
  transition: all var(--sw-transition-fast);
}

.sw-input:focus {
  outline: none;
  background: var(--sw-bg-input-focus);
  border-color: var(--sw-border-focus);
}

.sw-input::placeholder {
  color: var(--sw-text-muted);
}

/* Input with Icon/Button */
.sw-input-group {
  display: flex;
  align-items: center;
  gap: var(--sw-space-2);
  padding: 6px 12px;
  background: var(--sw-bg-input);
  border: 1.5px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  transition: all var(--sw-transition-fast);
}

.sw-input-group:focus-within {
  background: var(--sw-bg-input-focus);
  border-color: var(--sw-border-focus);
}

.sw-input-group .sw-input {
  flex: 1;
  padding: 0;
  background: transparent;
  border: none;
}

.sw-input-group .sw-input:focus {
  outline: none;
}

/* Checkbox & Radio */
.sw-checkbox,
.sw-radio {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--sw-primary);
}

/* Select Option (Clickable Card Style) */
.sw-select-option {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background: var(--sw-bg-card);
  border: 1.5px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  cursor: pointer;
  transition: all var(--sw-transition-fast);
}

.sw-select-option:hover {
  border-color: var(--sw-border-focus);
  background: var(--sw-bg-selected);
}

.sw-select-option.selected {
  border-color: var(--sw-border-selected);
  background: var(--sw-bg-selected);
}

.sw-select-option input {
  margin-right: var(--sw-space-3);
}

.sw-select-option label {
  font-size: var(--sw-text-lg);
  font-weight: var(--sw-font-medium);
  color: var(--sw-text-primary);
  cursor: pointer;
  flex: 1;
}

/* Textarea */
.sw-textarea {
  width: 100%;
  min-height: 100px;
  padding: 10px 14px;
  background: var(--sw-bg-input);
  border: 1.5px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  font-family: var(--sw-font-family);
  font-size: var(--sw-text-md);
  color: var(--sw-text-primary);
  transition: all var(--sw-transition-fast);
  resize: vertical;
}

.sw-textarea:focus {
  outline: none;
  background: var(--sw-bg-input-focus);
  border-color: var(--sw-border-focus);
}

/* Select */
.sw-select {
  width: 100%;
  padding: 10px 14px;
  background: var(--sw-bg-input);
  border: 1.5px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  font-family: var(--sw-font-family);
  font-size: var(--sw-text-md);
  color: var(--sw-text-primary);
  cursor: pointer;
  transition: all var(--sw-transition-fast);
}

.sw-select:focus {
  outline: none;
  background: var(--sw-bg-input-focus);
  border-color: var(--sw-border-focus);
}


/* ==========================================================================
   7. CARDS
   ========================================================================== */

.sw-card {
  background: var(--sw-bg-card);
  border-radius: var(--sw-radius-3xl);
  padding: var(--sw-space-10);
  box-shadow: var(--sw-shadow-md);
}

/* Space buttons inside cards */
.sw-card > .sw-btn:first-of-type {
  margin-top: var(--sw-space-6);
}

.sw-card > .sw-btn + .sw-btn {
  margin-left: var(--sw-space-3);
}

.sw-card-sm {
  padding: var(--sw-space-6);
  border-radius: var(--sw-radius-xl);
}

.sw-card-bordered {
  border: 1px solid var(--sw-border-default);
  box-shadow: none;
}

.sw-card-elevated {
  box-shadow: var(--sw-shadow-lg);
}

.sw-card-header {
  margin-bottom: var(--sw-space-6);
}

.sw-card-title {
  font-size: var(--sw-text-2xl);
  font-weight: var(--sw-font-semibold);
  color: var(--sw-text-primary);
  margin-bottom: var(--sw-space-2);
}

.sw-card-title:has(+ .sw-card-subtitle) {
  margin-bottom: 0;
}

.sw-card-subtitle {
  font-size: var(--sw-text-lg);
  color: var(--sw-text-tertiary);
  line-height: var(--sw-leading-normal);
  padding-top: var(--sw-space-1);
}

.sw-card-subtitle + * {
  margin-top: var(--sw-space-6);
}

.sw-card-content {
  margin-bottom: var(--sw-space-6);
}

.sw-card-footer {
  display: flex;
  gap: var(--sw-space-3);
}


/* ==========================================================================
   8. MODALS
   ========================================================================== */

.sw-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--sw-z-modal);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--sw-transition-normal), visibility var(--sw-transition-normal);
}

.sw-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}


/* ==========================================================================
   9. CHAT MESSAGES
   ========================================================================== */

.sw-chat-message {
  display: flex;
  margin-bottom: var(--sw-space-3);
  animation: sw-message-slide-in 0.3s ease;
}

@keyframes sw-message-slide-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sw-chat-message.user {
  justify-content: flex-end;
}

.sw-chat-message.assistant {
  justify-content: flex-start;
}

.sw-message-bubble {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: var(--sw-radius-2xl);
  font-size: var(--sw-text-md);
  line-height: var(--sw-leading-normal);
}

.sw-chat-message.user .sw-message-bubble {
  background: var(--sw-primary);
  color: var(--sw-text-inverse);
  border-bottom-right-radius: var(--sw-radius-sm);
}

.sw-chat-message.assistant .sw-message-bubble {
  background: var(--sw-bg-card);
  color: var(--sw-text-primary);
  border: 1px solid var(--sw-border-default);
  border-bottom-left-radius: var(--sw-radius-sm);
}


/* ==========================================================================
   10. PANELS & SIDEBARS
   ========================================================================== */

.sw-panel {
  background: var(--sw-bg-card);
  border: 1px solid var(--sw-border-default);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.sw-panel-header {
  padding: var(--sw-space-5);
  border-bottom: 1px solid var(--sw-border-default);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sw-panel-title {
  font-size: var(--sw-text-md);
  font-weight: var(--sw-font-semibold);
  color: var(--sw-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sw-panel-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--sw-space-4);
}


/* ==========================================================================
   11. COLLAPSIBLE MODULES
   ========================================================================== */

.sw-module {
  background: var(--sw-bg-page);
  border: 1px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  margin-bottom: var(--sw-space-3);
  overflow: hidden;
}

.sw-module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sw-space-3) var(--sw-space-4);
  cursor: pointer;
  transition: background var(--sw-transition-fast);
}

.sw-module-header:hover {
  background: var(--sw-bg-hover);
}

.sw-module-title {
  display: flex;
  align-items: center;
  gap: var(--sw-space-3);
  font-size: var(--sw-text-md);
  font-weight: var(--sw-font-medium);
  color: var(--sw-text-primary);
}

.sw-module-icon {
  width: 20px;
  height: 20px;
  color: var(--sw-text-tertiary);
}

.sw-module-chevron {
  color: var(--sw-text-tertiary);
  transition: transform var(--sw-transition-normal);
}

.sw-module.expanded .sw-module-chevron {
  transform: rotate(180deg);
}

.sw-module-content {
  display: none;
  padding: 0 var(--sw-space-4) var(--sw-space-4);
  border-top: 1px solid var(--sw-border-default);
}

.sw-module.expanded .sw-module-content {
  display: block;
}


/* ==========================================================================
   12. LIST ITEMS
   ========================================================================== */

.sw-list-item {
  display: flex;
  align-items: flex-start;
  gap: var(--sw-space-3);
  padding: var(--sw-space-3);
  background: var(--sw-bg-card);
  border-radius: var(--sw-radius-md);
  margin-bottom: var(--sw-space-2);
  cursor: pointer;
  transition: all var(--sw-transition-fast);
  border: 1px solid transparent;
}

.sw-list-item:hover {
  border-color: var(--sw-border-default);
}

.sw-list-item.active {
  background: var(--sw-bg-subtle);
  border-color: var(--sw-text-tertiary);
}

.sw-list-item:last-child {
  margin-bottom: 0;
}

.sw-list-item-icon {
  flex-shrink: 0;
  color: var(--sw-text-tertiary);
  margin-top: 2px;
}

.sw-list-item-content {
  flex: 1;
  min-width: 0;
}

.sw-list-item-title {
  font-size: var(--sw-text-base);
  font-weight: var(--sw-font-medium);
  color: var(--sw-text-primary);
  margin-bottom: 2px;
}

.sw-list-item-meta {
  font-size: var(--sw-text-xs);
  color: var(--sw-text-tertiary);
}


/* ==========================================================================
   13. CHIPS & TAGS
   ========================================================================== */

.sw-chip {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  background: var(--sw-bg-selected);
  border: 1px solid var(--sw-border-default);
  border-radius: var(--sw-radius-lg);
  font-size: var(--sw-text-md);
  color: var(--sw-text-secondary);
  cursor: pointer;
  transition: all var(--sw-transition-fast);
}

.sw-chip:hover {
  background: var(--sw-bg-hover);
  border-color: var(--sw-border-hover);
  color: var(--sw-text-primary);
}

.sw-chip-sm {
  padding: 6px 10px;
  font-size: var(--sw-text-sm);
}

.sw-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background: var(--sw-bg-hover);
  border-radius: var(--sw-radius-md);
  font-size: var(--sw-text-xs);
  font-weight: var(--sw-font-medium);
  color: var(--sw-text-secondary);
}

.sw-tag-success {
  background: var(--sw-success-bg);
  color: var(--sw-success);
}

.sw-tag-warning {
  background: var(--sw-warning-bg);
  color: var(--sw-warning-text);
}

.sw-tag-danger {
  background: var(--sw-danger-bg);
  color: var(--sw-danger);
}


/* ==========================================================================
   14. PROGRESS INDICATORS
   ========================================================================== */

/* Progress Dots */
.sw-progress-dots {
  display: flex;
  gap: var(--sw-space-2);
  justify-content: center;
}

.sw-progress-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--sw-radius-full);
  background: var(--sw-gray-200);
  transition: all var(--sw-transition-slow);
}

.sw-progress-dot.active {
  background: var(--sw-primary);
  width: 24px;
  border-radius: var(--sw-radius-sm);
}

.sw-progress-dot.completed {
  background: var(--sw-gray-400);
}

/* Spinner */
.sw-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid var(--sw-gray-200);
  border-top-color: var(--sw-primary);
  border-radius: var(--sw-radius-full);
  animation: sw-spin 1s linear infinite;
}

.sw-spinner-sm {
  width: 24px;
  height: 24px;
  border-width: 2px;
}

@keyframes sw-spin {
  to {
    transform: rotate(360deg);
  }
}


/* ==========================================================================
   15. BANNERS & ALERTS
   ========================================================================== */

.sw-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sw-space-3);
  padding: var(--sw-space-3) var(--sw-space-4);
  border-radius: var(--sw-radius-lg);
}

.sw-banner-warning {
  background: var(--sw-warning-bg);
  border: 1px solid var(--sw-warning-border);
}

.sw-banner-warning .sw-banner-text {
  color: var(--sw-warning-text);
}

.sw-banner-danger {
  background: var(--sw-danger-bg);
  border: 1px solid var(--sw-danger-border);
}

.sw-banner-danger .sw-banner-text {
  color: var(--sw-danger);
}

.sw-banner-success {
  background: var(--sw-success-bg);
  border: 1px solid var(--sw-success-border);
}

.sw-banner-success .sw-banner-text {
  color: var(--sw-success);
}

.sw-banner-text {
  font-size: var(--sw-text-base);
  font-weight: var(--sw-font-medium);
}

.sw-banner-actions {
  display: flex;
  gap: var(--sw-space-2);
}

/* Banner-specific button variants */
.sw-banner-warning .sw-btn-outline {
  background: transparent;
  border: 1.5px solid var(--sw-warning);
  color: var(--sw-warning-text);
}

.sw-banner-warning .sw-btn-outline:hover {
  background: rgba(217, 119, 6, 0.1);
}

.sw-banner-danger .sw-btn-outline {
  background: transparent;
  border: 1.5px solid var(--sw-danger);
  color: var(--sw-danger);
}

.sw-banner-danger .sw-btn-outline:hover {
  background: rgba(220, 38, 38, 0.1);
}

.sw-banner-success .sw-btn-outline {
  background: transparent;
  border: 1.5px solid var(--sw-success);
  color: var(--sw-success);
}

.sw-banner-success .sw-btn-outline:hover {
  background: rgba(22, 163, 74, 0.1);
}


/* ==========================================================================
   16. AVATARS
   ========================================================================== */

.sw-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--sw-radius-full);
  background: linear-gradient(135deg, var(--sw-gray-200) 0%, var(--sw-gray-300) 100%);
  font-size: var(--sw-text-sm);
  font-weight: var(--sw-font-semibold);
  color: var(--sw-text-secondary);
  flex-shrink: 0;
  overflow: hidden;
  text-transform: uppercase;
}

.sw-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sw-avatar-sm {
  width: 28px;
  height: 28px;
}

.sw-avatar-xs {
  width: 24px;
  height: 24px;
  font-size: var(--sw-text-xs);
}

.sw-avatar-lg {
  width: 56px;
  height: 56px;
  font-size: var(--sw-text-lg);
}

.sw-avatar-group {
  display: flex;
}

.sw-avatar-group .sw-avatar {
  margin-left: -14px;
  border: 2px solid var(--sw-bg-card);
}

.sw-avatar-group .sw-avatar:first-child {
  margin-left: 0;
}


/* ==========================================================================
   17. DIVIDERS
   ========================================================================== */

.sw-divider {
  height: 1px;
  background: var(--sw-border-default);
  margin: var(--sw-space-6) 0;
}

.sw-divider-sm {
  margin: var(--sw-space-3) 0;
}


/* ==========================================================================
   18. FIELD GRID (Data Display)
   ========================================================================== */

.sw-field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--sw-space-4);
}

.sw-field {
  display: flex;
  flex-direction: column;
  gap: var(--sw-space-1);
}

.sw-field-label {
  font-size: var(--sw-text-xs);
  font-weight: var(--sw-font-semibold);
  color: var(--sw-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sw-field-value {
  font-size: var(--sw-text-md);
  font-weight: var(--sw-font-medium);
  color: var(--sw-text-primary);
}


/* ==========================================================================
   19. NAVIGATION
   ========================================================================== */

.sw-nav {
  display: flex;
  flex-direction: column;
  gap: var(--sw-space-1);
}

.sw-nav-item {
  display: flex;
  align-items: center;
  gap: var(--sw-space-3);
  padding: var(--sw-space-2) var(--sw-space-3);
  border-radius: var(--sw-radius-lg);
  font-size: var(--sw-text-md);
  font-weight: var(--sw-font-medium);
  color: var(--sw-text-secondary);
  transition: all var(--sw-transition-fast);
  cursor: pointer;
}

.sw-nav-item:hover {
  background: var(--sw-bg-hover);
  color: var(--sw-text-primary);
}

.sw-nav-item.active {
  background: var(--sw-bg-hover);
  color: var(--sw-text-primary);
}

.sw-nav-item-icon {
  width: 20px;
  height: 20px;
  color: var(--sw-text-tertiary);
}

.sw-nav-section {
  font-size: var(--sw-text-xs);
  font-weight: var(--sw-font-semibold);
  color: var(--sw-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: var(--sw-space-4) var(--sw-space-3) var(--sw-space-2);
}


/* ==========================================================================
   20. UTILITY CLASSES
   ========================================================================== */

/* Display */
.sw-hidden { display: none; }
.sw-flex { display: flex; }
.sw-inline-flex { display: inline-flex; }
.sw-grid { display: grid; }
.sw-block { display: block; }
.sw-inline { display: inline; }

/* Flex */
.sw-flex-col { flex-direction: column; }
.sw-flex-row { flex-direction: row; }
.sw-items-center { align-items: center; }
.sw-items-start { align-items: flex-start; }
.sw-items-end { align-items: flex-end; }
.sw-justify-center { justify-content: center; }
.sw-justify-between { justify-content: space-between; }
.sw-justify-end { justify-content: flex-end; }
.sw-flex-1 { flex: 1; }
.sw-flex-wrap { flex-wrap: wrap; }

/* Gap */
.sw-gap-1 { gap: var(--sw-space-1); }
.sw-gap-2 { gap: var(--sw-space-2); }
.sw-gap-3 { gap: var(--sw-space-3); }
.sw-gap-4 { gap: var(--sw-space-4); }
.sw-gap-5 { gap: var(--sw-space-5); }
.sw-gap-6 { gap: var(--sw-space-6); }

/* Padding */
.sw-p-0 { padding: 0; }
.sw-p-1 { padding: var(--sw-space-1); }
.sw-p-2 { padding: var(--sw-space-2); }
.sw-p-3 { padding: var(--sw-space-3); }
.sw-p-4 { padding: var(--sw-space-4); }
.sw-p-5 { padding: var(--sw-space-5); }
.sw-p-6 { padding: var(--sw-space-6); }
.sw-px-4 { padding-left: var(--sw-space-4); padding-right: var(--sw-space-4); }
.sw-py-4 { padding-top: var(--sw-space-4); padding-bottom: var(--sw-space-4); }

/* Margin */
.sw-m-0 { margin: 0; }
.sw-mb-1 { margin-bottom: var(--sw-space-1); }
.sw-mb-2 { margin-bottom: var(--sw-space-2); }
.sw-mb-3 { margin-bottom: var(--sw-space-3); }
.sw-mb-4 { margin-bottom: var(--sw-space-4); }
.sw-mb-5 { margin-bottom: var(--sw-space-5); }
.sw-mb-6 { margin-bottom: var(--sw-space-6); }
.sw-mt-4 { margin-top: var(--sw-space-4); }
.sw-mt-6 { margin-top: var(--sw-space-6); }

/* Text */
.sw-text-center { text-align: center; }
.sw-text-left { text-align: left; }
.sw-text-right { text-align: right; }
.sw-text-primary { color: var(--sw-text-primary); }
.sw-text-secondary { color: var(--sw-text-secondary); }
.sw-text-tertiary { color: var(--sw-text-tertiary); }
.sw-text-muted { color: var(--sw-text-muted); }
.sw-font-normal { font-weight: var(--sw-font-normal); }
.sw-font-medium { font-weight: var(--sw-font-medium); }
.sw-font-semibold { font-weight: var(--sw-font-semibold); }
.sw-font-bold { font-weight: var(--sw-font-bold); }

/* Truncate */
.sw-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sw-line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sw-line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Overflow */
.sw-overflow-hidden { overflow: hidden; }
.sw-overflow-auto { overflow: auto; }
.sw-overflow-y-auto { overflow-y: auto; }

/* Width/Height */
.sw-w-full { width: 100%; }
.sw-h-full { height: 100%; }
.sw-min-h-screen { min-height: 100vh; }

/* Cursor */
.sw-cursor-pointer { cursor: pointer; }
.sw-cursor-default { cursor: default; }

/* Transitions */
.sw-transition { transition: all var(--sw-transition-fast); }
.sw-transition-slow { transition: all var(--sw-transition-slow); }

/* Border Radius */
.sw-rounded { border-radius: var(--sw-radius-md); }
.sw-rounded-lg { border-radius: var(--sw-radius-lg); }
.sw-rounded-xl { border-radius: var(--sw-radius-xl); }
.sw-rounded-full { border-radius: var(--sw-radius-full); }

/* Background */
.sw-bg-page { background: var(--sw-bg-page); }
.sw-bg-card { background: var(--sw-bg-card); }
.sw-bg-hover { background: var(--sw-bg-hover); }
```
