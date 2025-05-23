import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Skills section: List of skill tags
 */
const skills = [
  "React",
  "Next.js",
  "Typescript",
  "Python",
  "Postgres",
  "C++",
];

export default function Skills() {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <Badge key={idx} variant="secondary" className="text-black">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 