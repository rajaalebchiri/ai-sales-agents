import PageHeader from "@/components/ResuableComponents/LayoutComponents/PageHeader";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { leadData } from "./__tests__/data";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <PageHeader
        heading="The home to all your customers"
        placeholder="Search Customer..."
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm text-muted-foreground">
              Name
            </TableHead>
            <TableHead className="text-sm text-muted-foreground">
              Email
            </TableHead>
            <TableHead className="text-sm text-muted-foreground">
              Phone
            </TableHead>
            <TableHead className="text-right text-sm text-muted-foreground">
              Tags
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leadData?.map((lead, idx) => (
            <TableRow key={idx} className="border-0">
              <TableCell className="font-medium">{lead?.name}</TableCell>
              <TableCell>{lead?.email}</TableCell>
              <TableCell>{lead?.phone}</TableCell>
              <TableCell className="text-right">
                {lead?.tags?.map((tag, idx) => (
                  <Badge key={idx} variant={"outline"}>
                    {tag}
                  </Badge>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
