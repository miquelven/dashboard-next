import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className='flex-1 bg-gray-950 text-zinc-300 hover:bg-black "'>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl  select-none">
            Últimos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription className="text-zinc-500">
          Novos clientes nas últimas 24 horas
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-4 border-b border-gray-800 py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/miquelven.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Miquelven Silva
            </p>
            <span className="text-[12px] text-gray-400 sm:text-sm">
              teste@teste.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-4 border-b border-gray-800 py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/miquelven.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Miquelven Silva
            </p>
            <span className="text-[12px] text-gray-400 sm:text-sm">
              teste@teste.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-4 border-b border-gray-800 py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/miquelven.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Miquelven Silva
            </p>
            <span className="text-[12px] text-gray-400 sm:text-sm">
              teste@teste.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
