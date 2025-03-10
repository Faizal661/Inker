import { FC } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UsernameInput: FC = () => {
  return (
    <div className="grid w-full  items-center gap-1.5 my-10 relative">
      <Label className='absolute right-3 top-0 font-medium'>change</Label>
      <Label htmlFor="email" >Username</Label>
      <Input type="email" id="email" placeholder="Email" />
      <p className="text-gray-500 text-xs">This is your display name. It can be your real name or a pseudonym.you can only change this once every 30 days</p>
    </div>
  )
}

export default UsernameInput