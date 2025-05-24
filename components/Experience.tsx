import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";


const experiences = [
  {
    company: "Camarin AI",
    logo: "/company.jpg", 
    role: "Full Stack Intern",
    date: "December 2024 - January 2025",
  },
];

export default function Experience() {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-white">Work Ex</h2>
        <div className="flex flex-col gap-6 text-white">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} />
                </Avatar>
                <div>
                  <div className="font-semibold">{exp.company}</div>
                  <div className="text-sm text-gray-400">{exp.role}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 whitespace-nowrap">{exp.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 