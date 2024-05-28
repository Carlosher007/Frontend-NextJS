"use client"

export default function Page({ params }: { params: { uid: string, token:string } }) {
    return <div>My Post: {params.uid} and {params.token}</div>
}