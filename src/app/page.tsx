'use client'


// import Image from 'next/image'
// import styles from './page.module.css'
// import body from '@/app/components/body';
// import Link from 'next/link';
import AppTable from '@/app/components/tableApp';
import { useEffect } from 'react';
import useSWR from 'swr'


export default function Home() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if (!data) {
    return <div>loading...</div>
  }

  console.log("check res: ", data)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check res: ", data)
  //   }
  //   fetchData();
  // }, [])
  return (
    <div>
      {/* <div>{data?.length}</div> */}
      {/* <div>Quản lí nhân sự</div> */}
      <ul>
        {/* <li>
          <Link href={"/salary"}>Quản lí Lương</Link>
        </li>
        <li>
          <Link href={"/leave"}>Quản lí nghỉ phép</Link>
        </li>
        <li>
          <Link href={"/report"}>Báo cáo và tài liệu</Link>
        </li> */}
        <AppTable
          blogs={data?.sort((a:any,b:any)=>b.id-a.id)} />

      </ul>
    </div>
  )
}
