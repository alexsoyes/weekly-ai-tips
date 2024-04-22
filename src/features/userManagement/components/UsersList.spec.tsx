import { render, screen } from "@testing-library/react";
import UserEntity from "../types/UserEntity";
import UserList from "./UsersList";

jest.mock("./UserDeleteButton", () => jest.fn());

describe("UserList", () => {
  test("renders clickable email for user", () => {
    const mockUsers: UserEntity[] = [
      {
        id: "1",
        name: "Test User",
        picture: "http://example.com/pic.jpg",
        email: "test@example.com",
        roles: ["ADMIN"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    render(<UserList users={mockUsers} />);

    const emailLink = screen.getByRole("link", { name: /test@example.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:test@example.com");
  });
});
