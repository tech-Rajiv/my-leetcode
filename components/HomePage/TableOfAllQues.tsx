import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeadingOfAllQues from "./HeadingOfAllQues";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
function TableOfAllQues({
  questions,
}: {
  questions: Array<{
    id: number;
    title: string;
    difficulty: string;
    topic: string;
    url: string;
    includeIn: string[];
  }>;
}) {
  return (
    <div className=" overflow-x-auto">
      <Table className=" border">
        <TableHeader className="bg-muted">
          <TableRow className="">
            <TableHead className="w-18  font-semibold">No</TableHead>

            {/* Question column gets remaining space */}
            <TableHead className="font-semibold ">Question</TableHead>

            <TableHead className="w-32  font-semibold">Difficulty</TableHead>

            <TableHead className="w-32  font-semibold">Topic</TableHead>

            <TableHead className="w-32  font-semibold">Link</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {questions.map((ques) => (
            <TableRow key={ques.id} className="hover:bg-muted/50 transition">
              <TableCell className=" text-muted-foreground">
                {ques.id}
              </TableCell>

              {/* Controlled Question Width */}
              <TableCell className="max-w-xl">
                <Link
                  href={"/question/" + ques.id}
                  className="line-clamp-2 text-sm leading-snug hover:underline underline-offset-2  cursor-pointer"
                >
                  {ques.title}
                </Link>
              </TableCell>

              <TableCell className="">
                <span className="text-xs bg-secondary font-medium p-2 rounded ">
                  {ques.difficulty}
                </span>
              </TableCell>

              <TableCell className=" text-sm text-muted-foreground">
                {ques.topic}
              </TableCell>

              <TableCell className=" ">
                <a
                  href={ques.url}
                  target="_blank"
                  className="text-sm font-medium text-muted-foreground hover:underline hover:text-blue-400 flex items-center gap-1"
                >
                  Leetcode
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableOfAllQues;
