import { Chart } from "@/components/chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gray-950 text-zinc-300 hover:bg-black">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl  select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription className="text-zinc-500">
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-zinc-100">
              R$ 40.000
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-950 text-zinc-300 hover:bg-black ">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl  select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription className="text-zinc-500">
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-zinc-100">234</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-950 text-zinc-300 hover:bg-black ">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl  select-none">
                Pedidos Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription className="text-zinc-500">
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-zinc-100">65</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-950 text-zinc-300 hover:bg-black ">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl  select-none">
                Total Pedidos
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription className="text-zinc-500">
              Total pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-zinc-100">2300</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart />
        <Sales />
      </section>
    </main>
  );
}
