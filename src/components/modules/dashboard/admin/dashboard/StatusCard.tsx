import { Card, CardContent } from "@/components/ui/card";

const StatusCard = ({
  name,
  count,
}: {
  name: string;
  count: string | number;
}) => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-2xl font-medium pb-1 mb-6 border-b-2 border-b-orange-200">
          {name}
        </h3>
        <p className="text-right text-4xl font-semibold text-orange-400">
          {count}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
