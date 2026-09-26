# E-commerce Order Tracking Screen

A modern, responsive Order Tracking experience designed for an e-commerce fashion application.

The screen improves the traditional order status experience by providing a clear delivery timeline, current delivery status, estimated delivery information, product summary, and interactive handling for different delivery situations.

## Task

This project was created as part of a Frontend Developer Practical Assessment.

The goal was to redesign an order tracking experience so users can understand their delivery status quickly and clearly.

## Tech Stack

- Next.js
- React.js
- JavaScript
- Tailwind CSS
- React Icons

## Main Features

### 1. Visual Delivery Timeline

A clear step-by-step timeline showing:

- Order Confirmed
- Packed & Ready
- Out for Delivery
- Delivered

Completed, current, and upcoming steps have different visual states.

### 2. Dynamic Order States

The interface supports multiple delivery situations through an interactive state switcher:

- On the Way
- Delayed
- Delivered but Not Received
- Tracking Pending

The state changes dynamically without navigating to another page.

### 3. Delayed Order State

The delayed state provides:

- Delayed status badge
- Delivery delay warning
- Explanation for the delay
- Previous expected delivery date
- Updated delivery date
- Updated progress indicator

Example:

> We are experiencing a delay due to high order volume.

### 4. Delivered but Not Received

The interface handles cases where the system shows the order as delivered but the customer has not received it.

It includes:

- Delivered status
- Clear explanation
- Missing package support section
- Report Missing Package action
- Customer support interaction

### 5. Tracking Pending State

When tracking information is not available yet, the timeline is replaced with a friendly pending state instead of showing an empty or broken interface.

The user sees:

- Tracking Pending status
- Loading indicator
- Clear explanation
- Expected tracking update timeframe

### 6. Loading Feedback

Changing between delivery states displays a short loading state to simulate a real tracking update.

### 7. Customer Support Interaction

Interactive support actions are available through:

- Contact Support
- Get Help
- Report Missing Package

These actions open a customer support modal.

### 8. Product Summary

The screen displays:

- Product images
- Product names
- Color
- Size
- Quantity
- Number of items

### 9. Delivery Information

The interface includes:

- Delivery address
- Estimated delivery time
- Current delivery status

### 10. Responsive Design

The screen is designed to work across:

- Mobile
- Tablet
- Desktop

The mobile layout is optimized for approximately 360px–430px screen widths.

### 11. Modern Fashion E-commerce UI

The visual design uses a clean fashion-oriented style with:

- Warm off-white background
- White content cards
- Neutral typography
- Muted olive/green accent
- Rounded cards
- Subtle shadows
- Clear spacing
- Minimal visual clutter

## UX Considerations

The interface was designed around quick status recognition.

Important information such as the current status, estimated delivery, and delivery progress is presented prominently.

Different edge cases are handled explicitly so the user never encounters an empty or confusing tracking experience.

## Interactive Demo

The `Preview state` control allows reviewers to test different order situations:

1. On the Way
2. Delayed
3. Missing
4. Pending

Each state updates the interface dynamically on the same page.

## Project Structure

```text
src/
├── components/
│   └── OrdertrackingCard.jsx
│
├── assect/
│   ├── tee.jpg
│   └── shoes.jpg
│
└── ...