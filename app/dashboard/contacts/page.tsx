"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { format, isToday } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

interface Contact {
  _id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function ContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    try {
      const res = await axios.get("/api/contact");

      setContacts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const todayMessages = contacts.filter((item) =>
    isToday(new Date(item.createdAt)),
  );

  const todayTotal = todayMessages.length;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 space-y-6">
      {/* Heading */}

      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Contact Messages
        </h1>

        <p className="text-muted-foreground">Manage all customer inquiries</p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm text-muted-foreground">Total Messages</h2>

            <p className="text-3xl font-bold mt-2">{contacts.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm text-muted-foreground">Today</h2>

            <p className="text-3xl font-bold mt-2"> {todayTotal}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm text-muted-foreground">Unread</h2>

            <p className="text-3xl font-bold mt-2">0</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}

      <div className="max-w-sm">
        <Input
          placeholder="Search by name ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}

      <Card className="hidden md:block">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>

                  <TableCell>{contact.phone}</TableCell>

                  <TableCell className="max-w-[300px] truncate">
                    {contact.message}
                  </TableCell>

                  <TableCell>
                    {format(new Date(contact.createdAt), "dd/MM/yyyy")}
                  </TableCell>

                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Message</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          From {contact.name} ({contact.phone})
                        </DialogDescription>
                        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                          <p className="mb-4 leading-normal">
                            {contact.message}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Mobile */}
      <div className="space-y-4 md:hidden">
        {filteredContacts.map((item) => (
          <Card key={item._id}>
            <CardContent className="p-4 text-xs">
              <p>
                <span className="font-semibold">Name:</span> {item.name}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {item.phone}
              </p>
              <p>
                <span className="font-semibold"> Date:</span>{" "}
                {format(new Date(item.createdAt), "dd-MM-yyyy")}
              </p>
              <p>
                <span className="font-semibold text-xs">Message:</span>{" "}
                {item.message}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
