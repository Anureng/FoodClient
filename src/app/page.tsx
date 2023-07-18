'use client'
import Feature from '@/components/Feature'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'


export default function Home() {
  return (
<main>
  <Header/>
  <Feature/>
 <Footer/>
</main>
  )
}
