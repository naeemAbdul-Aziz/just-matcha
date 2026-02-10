from playwright.sync_api import sync_playwright
import time
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Create verification directory if not exists
    os.makedirs('verification', exist_ok=True)

    # 1. Landing Page
    print("Navigating to Landing Page...")
    page.goto("http://localhost:4173/")
    time.sleep(2) # Wait for animations/loading
    page.screenshot(path="verification/landing_page.png", full_page=True)
    print("Captured landing_page.png")

    # 2. Customization Page
    print("Navigating to Customization Page...")
    page.goto("http://localhost:4173/customize")
    time.sleep(2)
    page.screenshot(path="verification/customization_page.png", full_page=True)
    print("Captured customization_page.png")

    # 3. Checkout Page
    print("Navigating to Checkout Page...")
    page.goto("http://localhost:4173/checkout")
    time.sleep(2)
    page.screenshot(path="verification/checkout_page.png", full_page=True)
    print("Captured checkout_page.png")

    # 4. Success Page
    print("Navigating to Success Page...")
    page.goto("http://localhost:4173/success")
    time.sleep(2)
    page.screenshot(path="verification/success_page.png", full_page=True)
    print("Captured success_page.png")

    # 5. Admin Dashboard
    print("Navigating to Admin Dashboard...")
    page.goto("http://localhost:4173/admin")
    time.sleep(2)
    page.screenshot(path="verification/admin_dashboard.png", full_page=True)
    print("Captured admin_dashboard.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
