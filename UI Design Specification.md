# UI Design Specification

## 1. Color Specification

### 1.1 Core Colors
| Color Name | HEX Value | RGB Value | Usage |
|-----------|-----------|-----------|-------|
| Primary | #00BFA5 | RGB(0, 191, 165) | Buttons, emphasized text, interactive elements |
| Page Background | #000000 | RGB(0, 0, 0) | Main page background color |
| White | #FFFFFF | RGB(255, 255, 255) | Primary text color |
| Light Gray | #F5F5F5 | RGB(245, 245, 245) | Secondary text, borders |
| Medium Gray | #9E9E9E | RGB(158, 158, 158) | Hint text, placeholders |
| Dark Gray | #424242 | RGB(66, 66, 66) | Backgrounds, borders |

### 1.2 Functional Colors
| Color Name | HEX Value | RGB Value | Usage |
|-----------|-----------|-----------|-------|
| Success | #4CAF50 | RGB(76, 175, 80) | Success status indicators |
| Warning | #FFC107 | RGB(255, 193, 7) | Warning status indicators |
| Error | #F44336 | RGB(244, 67, 54) | Error status indicators |
| Info | #2196F3 | RGB(33, 150, 243) | Information indicators |

## 2. Typography Specification

### 2.1 Font Hierarchy
| Level | Font Size | Line Height | Font Weight | Usage |
|-------|-----------|-------------|-------------|-------|
| Heading 1 | 2.5rem (40px) | 1.2 | 700 | Page main title |
| Heading 2 | 2rem (32px) | 1.3 | 600 | Page subtitle |
| Heading 3 | 1.5rem (24px) | 1.4 | 600 | Card titles, section headers |
| Body Text | 1rem (16px) | 1.6 | 400 | Primary text content |
| Secondary Text | 0.875rem (14px) | 1.5 | 400 | Auxiliary information, hint text |
| Small Text | 0.75rem (12px) | 1.4 | 400 | Annotations, copyright information |

### 2.2 Font Styles
- Primary Font: System default sans-serif font
- Monospace Font: For code display

## 3. Spacing Specification

### 3.1 Base Spacing Unit
- Base Unit: 0.25rem (4px)
- Common Spacing:
  - Small Spacing: 0.5rem (8px), 1rem (16px)
  - Medium Spacing: 1.5rem (24px), 2rem (32px)
  - Large Spacing: 3rem (48px), 4rem (64px)

### 3.2 Component Spacing
- Button Spacing: 1rem (16px)
- Input Field Spacing: 0.5rem (8px)
- Card Spacing: 1.5rem (24px)
- Page Margin: 2rem (32px)

## 4. Border and Border-Radius Specification

### 4.1 Border Styles
- Border Width: 1px
- Border Color: #E0E0E0
- Border-Radius:
  - Small Radius: 0.25rem (4px)
  - Medium Radius: 0.5rem (8px)
  - Large Radius: 1rem (16px)
  - Full Radius: 9999px (circular/capsule shape)

### 4.2 Component Border-Radius
- Buttons: 0.5rem (8px)
- Input Fields: 0.25rem (4px)
- Cards: 0.5rem (8px)
- Avatars: Full Radius (9999px)

## 5. Login Page Design Specification

### 5.1 Page Layout
- Background Color: #000000 (Black)
- Content Alignment: Horizontally and vertically centered
- Login Form Container:
  - Width: Maximum 400px
  - Padding: 2rem (32px)
  - Border: None
  - Shadow: None

### 5.2 Title Design
- Main Title: "Welcome to My App"
  - Font Size: 2rem (32px)
  - Font Weight: 600
  - Color: #FFFFFF (White)
  - Text Align: Center
- Subtitle: "Please sign in to your account"
  - Font Size: 1rem (16px)
  - Color: #9E9E9E (Medium Gray)
  - Text Align: Center

### 5.3 Form Field Design
- Labels:
  - Font Size: 0.875rem (14px)
  - Color: #FFFFFF (White)
  - Spacing to Input Field: 0.5rem (8px)
- Input Fields:
  - Height: 3rem (48px)
  - Background Color: #2C2C2C (Dark Gray)
  - Border: 1px solid #424242
  - Border-Radius: 0.25rem (4px)
  - Text Color: #FFFFFF (White)
  - Placeholder Color: #666666
  - Focus State: Border color changes to #00BFA5 (Primary)
  - Error State: Border color changes to #F44336 (Error)

### 5.4 Button Design
- Primary Button:
  - Background Color: #00BFA5 (Primary)
  - Text Color: #FFFFFF (White)
  - Font Size: 1rem (16px)
  - Font Weight: 600
  - Height: 3rem (48px)
  - Border-Radius: 0.5rem (8px)
  - Hover State: Background color darkens by 10%
  - Click State: Background color darkens by 20%
  - Disabled State: Background color changes to #B0BEC5, text color changes to #ECEFF1
- Secondary Button:
  - Background Color: Transparent
  - Text Color: #00BFA5 (Primary)
  - Border: 1px solid #00BFA5
  - Other properties same as primary button

### 5.5 Links and Auxiliary Text
- Link Color: #00BFA5 (Primary)
- Hover State: Color darkens by 10%
- Auxiliary Text Color: #9E9E9E (Medium Gray)
- Font Size: 0.875rem (14px)

### 5.6 Error Messages
- Color: #F44336 (Error)
- Font Size: 0.875rem (14px)
- Spacing to Input Field: 0.5rem (8px)

## 6. Interaction Specification

### 6.1 Form Interactions
- Input fields show border highlight on focus
- Submit button remains disabled until form validation passes
- Show loading state on submission
- Display error messages in real-time

### 6.2 Button Interactions
- Slight enlargement or color change on hover
- Feedback effect on click (shadow change, scaling, etc.)
- Disabled state changes appearance and prevents clicking

### 6.3 Loading State
- Use Spinner component to indicate loading state
- Disable relevant interactive elements during loading

## 7. Responsive Design Specification

### 7.1 Breakpoint Settings
- Mobile Devices: < 640px
- Tablet Devices: 640px - 1024px
- Desktop Devices: > 1024px

### 7.2 Adaptation Strategy
- Mobile Devices: Single column layout, reduced spacing
- Tablet Devices: Adjust component sizes and spacing appropriately
- Desktop Devices: Multi-column layout, fully utilize screen space

### 7.3 Login Page Responsive Adjustments
- Mobile Devices: Login form width 100%, padding 1rem
- Desktop Devices: Login form maximum width 400px, centered display

## 8. Component Design Specification

### 8.1 Login Form Component Structure
```tsx
<LoginForm>
  <FormTitle />
  <FormSubtitle />
  <FormField label="Email">
    <Input type="email" />
  </FormField>
  <FormField label="Password">
    <Input type="password" />
  </FormField>
  <PasswordResetLink />
  <SubmitButton />
  <SignUpLink />
</LoginForm>
```

### 8.2 State Management
- Use React hooks to manage form state
- Encapsulate form validation logic within the component
- Handle and display error states uniformly

## 9. Development Specification

### 9.1 Style Implementation
- Use Tailwind CSS for style development
- Configure custom colors and styles in tailwind.config.js
- Follow BEM naming convention for component styles

### 9.2 Code Structure
- Define components using React.FC type
- Clearly define TypeScript interfaces
- Follow file organization rules in frontend development guidelines

### 9.3 Performance Optimization
- Use React.memo to optimize component rendering
- Use useMemo and useCallback appropriately
- Avoid unnecessary re-renders

## 10. Appendices

### 10.1 Design Resources
- Login Page Design: /src/assets/login.png
- Icon Resources: Use system default icons or Material UI icon library

### 10.2 Reference Documents
- Frontend Development Guidelines: /frontend-dev-guidelines/SKILL.md
- Tailwind CSS Documentation: https://tailwindcss.com/docs
