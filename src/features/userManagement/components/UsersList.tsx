"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import { deleteUserAction } from "../actions/userActions";
import UserEntity from "../types/UserEntity";

export type Props = {
  users: UserEntity[];
};

export default function UserList({ users }: Props): React.ReactElement {
  return (
    <>
      <Table>
        <TableCaption>Users list.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Picture</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Roles</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                {user.picture && (
                  <Image
                    src={user.picture}
                    alt={user.name}
                    width={50}
                    height={50}
                  />
                )}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.roles.join(", ")}</TableCell>
              <TableCell>{user.createdAt.toLocaleString()}</TableCell>
              <TableCell>{user.updatedAt.toLocaleString()}</TableCell>
              <TableCell>
                <form action={deleteUserAction}>
                  <input type="hidden" name="id" value={user.id} />
                  <Button type="submit">Delete</Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
