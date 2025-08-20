import React, {useState} from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const NormalCalendar = ({value,getDate, title , _placeholder}) => {
   const [open, setOpen] = useState(false)
  const [date, setDate] = useState(undefined)
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="date" className="px-1">
        {title}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal h-[43.5px]"
          >
            {value ? value.toLocaleDateString() : <div className="text-[#333]"> {_placeholder ? _placeholder :"Select date"} </div>}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
              getDate(date)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default NormalCalendar