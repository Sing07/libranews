"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  
  const handleOpenChange = () => {
    router.back()
  }
  return (
      <Dialog open={true} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild></DialogTrigger>

          <DialogContent className="sm:max-w-[90vw] sm:max-h-[100vh] max-w-[1024px] overflow-y-auto">
              <DialogHeader>
                  <span className="bg-orange-400 text-s font-bold p-2 rounded-full m-4">
                      Refresh this page, and you will be directed to a new page dedicated
                      to this post
                  </span>
                  {/* <div className="border-2 border-sky-500"> */}
                  <DialogTitle hidden>Custom Dialog</DialogTitle>
                  {/* <DialogDescription>
                          This is a customized dialog component from the shadcn UI
                          library.
                      </DialogDescription> */}

                  {/* </div> */}
              </DialogHeader>
              <div className="py-4">{children}</div>
              <DialogFooter></DialogFooter>
          </DialogContent>
      </Dialog>
  );
}