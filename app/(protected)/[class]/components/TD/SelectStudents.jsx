"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function SelectStudents({ people }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeople, setSelectedPeople] = useState([]);

  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (person) => {
    setSelectedPeople((prev) =>
      prev.some((p) => p.id === person.id)
        ? prev.filter((p) => p.id !== person.id)
        : [...prev, person]
    );
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search Student... 🎯"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2">Selected Students</h2>
        <ul className="flex gap-2 flex-wrap w-full">
          {selectedPeople.map((person) => (
            <li
              key={person.id}
              className="flex gap-2 border bg-gray-200 p-2 rounded-md items-center"
            >
              <span className="text-nowrap font-normal">{person.name}</span>
              <Button
                onClick={() => handleSelect(person)}
                className="text-white bg-red-500 hover:bg-red-400 font-normal"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Select</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Group Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPeople.map((person) => (
                <TableRow key={person.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedPeople.some((p) => p.id === person.id)}
                      onCheckedChange={() => handleSelect(person)}
                    />
                  </TableCell>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>04</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
