import Content from '@/components/Content/Content'
import Sidebar from '@/components/Sidebar/Sidebar'
import Users from '@/components/Users/Users'

export default function Home() {
  return (
    <>
      <div className='flex min-h-screen flex-col bg-[#F7F8FA] lg:flex-row'>
        <Sidebar />
        <Content />
        <Users />
      </div>
    </>
  )
}
