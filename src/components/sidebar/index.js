import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import { TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Tooltip, TooltipContent } from "@radix-ui/react-tooltip";

export const SideBar = () => {
  return (
    <div className="flex flex-col w-full bg-zinc-800">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-zinc-800 sm:flex sm:flex-col">
        <nav className="flex flex-col gap-4 items-center px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-full"
            >
              <Package className="w-4 h-4 " />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors text-white/75 hover:text-white"
                >
                  <Home className="w-4 h-4 " />
                  <span className="sr-only">Inicío</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Inicío</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors text-white/75 hover:text-white"
                >
                  <ShoppingBag className="w-4 h-4 " />
                  <span className="sr-only">Pedidos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors text-white/75 hover:text-white"
                >
                  <Users className="w-4 h-4 " />
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors text-white/75 hover:text-white"
                >
                  <Settings2 className="w-4 h-4 " />
                  <span className="sr-only">Configurações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors text-white/75 hover:text-white"
                >
                  <LogOut className="w-4 h-4 text-red-400 " />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 sm:static sm:h-auto sm:border-0 sm:px-6">
          <Sheet>
            <SheetTrigger aschild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom />
                <span className="sr-only">Abrir / Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-zinc-800" side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className="flex h-10 w-10  bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                  href="#"
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do Projeto</span>
                </Link>

                <Link
                  className="flex items-center gap-4 text px-2.5 text-white/75 hover:text-white"
                  prefetch={false}
                  href="#"
                >
                  <Home className="h-5 w-5 transition-all" />
                  Inicío
                </Link>

                <Link
                  className="flex items-center gap-4 text px-2.5 text-white/75 hover:text-white"
                  prefetch={false}
                  href="#"
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  Pedidos
                </Link>

                <Link
                  className="flex items-center gap-4 text px-2.5 text-white/75 hover:text-white"
                  prefetch={false}
                  href="#"
                >
                  <Package className="h-5 w-5 transition-all" />
                  Produtos
                </Link>

                <Link
                  className="flex items-center gap-4 text px-2.5 text-white/75 hover:text-white"
                  prefetch={false}
                  href="#"
                >
                  <Users className="h-5 w-5 transition-all" />
                  Clientes
                </Link>

                <Link
                  className="flex items-center gap-4 text px-2.5 text-white/75 hover:text-white"
                  prefetch={false}
                  href="#"
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  Configurações
                </Link>
              </nav>
            </SheetContent>
            <h2>Menu</h2>
          </Sheet>
        </header>
      </div>
    </div>
  );
};
