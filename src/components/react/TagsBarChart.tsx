import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Component({
  tags,
}: {
  tags: {
    value: string;
    count: number;
  }[];
}) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("count");

  const total = React.useMemo(
    () => tags.map((tag) => tag.count).reduce((a, b) => a + b, 0),
    [],
  );

  return (
    <Card className={"min-w-[375px] w-full"}>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={tags}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="value"
              tickLine={false}
              axisLine={false}
              tickMargin={9}
              minTickGap={2}
              tickFormatter={(value) => {
                return value.length < 10 ? value : value.slice(0, 6) + "...";
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="count"
                  labelFormatter={(value) => {
                    return value;
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Component;
