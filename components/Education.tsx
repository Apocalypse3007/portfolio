import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function Education() {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-white">Education</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <img src="college.png" alt="Mumbai University logo" />
            </Avatar>
            <div>
              <div className="font-semibold text-white">IIIT Delhi</div>
              <div className="text-sm text-gray-400">
                Electronics &amp; VLSI
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400 whitespace-nowrap">2023 - 2027</div>
        </div>
      </CardContent>
    </Card>
  );
} 