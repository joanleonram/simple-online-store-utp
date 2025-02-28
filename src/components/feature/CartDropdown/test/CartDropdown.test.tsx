import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import CartDropdown from "../CartDropdown";
import { mockCart } from "./mockCart";

const mockOnClearCart = jest.fn();
const mockOnRemoveFromCart = jest.fn();

describe("CartDropdown", () => {
  it("renders the cart count and total amount", () => {
    render(
      <CartDropdown
        cart={mockCart}
        cartCount={mockCart.length}
        totalAmount={mockCart.reduce(
          (total, product) => total + product.price,
          0
        )}
        onClearCart={mockOnClearCart}
        onRemoveFromCart={mockOnRemoveFromCart}
      />
    );

    expect(screen.getByText("2 productos")).toBeInTheDocument();
    expect(screen.getByText("Total: S/30.00")).toBeInTheDocument();
  });

  it("opens the dropdown menu when clicked", () => {
    render(
      <CartDropdown
        cart={mockCart}
        cartCount={mockCart.length}
        totalAmount={mockCart.reduce(
          (total, product) => total + product.price,
          0
        )}
        onClearCart={mockOnClearCart}
        onRemoveFromCart={mockOnRemoveFromCart}
      />
    );

    fireEvent.click(screen.getByText("2 productos"));

    expect(screen.getByText("Carrito")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
