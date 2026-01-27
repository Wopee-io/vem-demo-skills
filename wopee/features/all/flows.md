# Hierarchical Catalogue of End-to-End User Flows for Swag Labs

---

### 1. Authentication — Secure Login and Access
To enter the platform, users must log in with a valid username and password. After providing credentials, access to the main catalogue is granted. Feedback ensures users recognize both successful and unsuccessful login attempts. This is essential for restricting further actions to authenticated users only.

#### Steps
1. Navigate to the Swag Labs login page.
2. Enter a valid username and password.
3. Click the “Login” button.
4. Receive feedback on login success or failure.
5. Upon success, access the product listing page.

**User Stories:**
- **As a shopper, I want to log in so that I can securely access my shopping environment.**
    - Login succeeds with accepted credentials and routes to the product catalogue.
    - Login fails with incorrect credentials, displaying an error message.
    - Password is entered securely with masking.

---

### 2. Product Exploration — Browse and View Inventory
Post-login, users can browse a grid of available products, each displayed with an image, title, description, and price. Sorting options are provided to rearrange items, ensuring users can efficiently discover and select products relevant to their interests.

#### Steps
1. View the product catalogue after login.
2. Browse product images, names, and prices.
3. Use sorting dropdown to reorder product view (e.g., A-Z).
4. Select a product to view its details (optional).

**User Stories:**
- **As a shopper, I want to view all available products so that I can decide what to purchase.**
    - All featured products are visible with accurate details.
    - Sorting options (e.g., alphabetical) function as expected.
- **As a shopper, I want to view product details so that I can make informed buying decisions.**
    - Clicking on a product name or image navigates to the product detail (if available).

---

### 3. Cart Management — Add, View, and Remove Items
Users can add items to their cart directly from the listing or product detail, with visual confirmation via the cart badge and summary. They can review cart contents, modify quantities, or remove items as needed, ensuring correct selections before purchase.

#### Steps
1. Add a product to the shopping cart.
2. Confirm the cart badge updates with the correct count.
3. Click the cart icon to view cart summary.
4. Remove items or update quantities if necessary.

**User Stories:**
- **As a shopper, I want to add products to my cart so that I can purchase multiple items.**
    - Cart badge increments accurately when products are added.
    - Removal of an item updates the cart and badge in real time.
- **As a shopper, I want to view my cart so that I can verify my selections before checkout.**
    - Cart displays all selected items, quantities, and total cost.

---

### 4. Checkout — Order Placement and Completion
To finish a purchase, users proceed through a guided, multi-step checkout. Personal information is entered, and the order overview is displayed for final confirmation. A success message with confirmation assures the user their transaction is complete.

#### Steps
1. From the cart, initiate checkout.
2. Enter first name, last name, and postal code.
3. Continue to the order overview.
4. Review order details and submit (Finish).
5. Receive a “Thank you for your order!” completion message.

**User Stories:**
- **As a shopper, I want to provide my information so that my order can be processed accurately.**
    - Checkout form requires first name, last name, and postal code.
    - Blank or invalid fields prompt a user-friendly error.
- **As a shopper, I want a clear order confirmation so that I am assured my purchase is successful.**
    - A distinct “Thank you for your order!” message follows successful checkout.
    - “Back Home” button is available to continue shopping.

---

### 5. Navigation — Efficient In-App Movement
Users navigate easily across all sections using the persistent burger menu and page links. The navigation experience remains consistent, with access to catalogue, about, logout, and app reset from anywhere in the session.

#### Steps
1. Use the burger menu (“Open Menu”) to reveal navigation options.
2. Access sections: All Items, About, Logout, and Reset App State.
3. Use cart and footer links freely across screens.

**User Stories:**
- **As a user, I want simple access to all main sections so that I can control my session.**
    - The menu is accessible on every page and reveals key navigation links.
    - The cart link and social links are visible and functional at all times.
- **As a user, I want to log out so that I can end my session securely.**
    - Logging out instantly returns to the login page and clears session context.

---

### 6. Social Links & Footer — External Engagement
Relevant social media links are located in the footer across all pages, enabling users to engage with Swag Labs on various networks if desired.

#### Steps
1. View the footer area present on every page.
2. Click Twitter, Facebook, or LinkedIn icons.
3. Verify redirection to the respective Swag Labs social page.

**User Stories:**
- **As a user, I want to access Swag Labs' social media so that I can follow or contact the brand.**
    - Footer includes working links to Twitter, Facebook, and LinkedIn.
    - Links open in new tabs/windows, preserving the app session.

---

This catalogue ensures every critical business process and user touchpoint is supported, with unambiguous outcomes and traceability to all UI elements within the Swag Labs platform.