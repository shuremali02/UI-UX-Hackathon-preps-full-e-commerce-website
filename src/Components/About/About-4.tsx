import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';

interface TeamMember {
  name: string;
  title: string;
  photoUrl: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    photoUrl:"/images/Team_1.svg",
    twitter: "https://twitter.com/tomcruise",
    instagram: "https://instagram.com/tomcruise",
    linkedin: "https://linkedin.com/in/tomcruise",
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    photoUrl: "/images/Team_2.svg",
    twitter: "https://twitter.com/emmawatson",
    instagram: "https://instagram.com/emmawatson",
    linkedin: "https://linkedin.com/in/emmawatson",
  },
  {
    name: "Will Smith",
    title: "Product Designer",
    photoUrl: "/images/Team_3.svg",
    twitter: "https://twitter.com/willsmith",
    instagram: "https://instagram.com/willsmith",
    linkedin: "https://linkedin.com/in/willsmith",
  },
];

const TeamCard = ({ name, title, photoUrl, twitter, instagram, linkedin }: TeamMember) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <Image className="w-full" src={photoUrl} alt={name} width={370} height={430}/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{title}</p>
    </div>
    <div className="px-6 pt-4 pb-2 flex gap-2">
    <Link href={twitter} ><CiTwitter size={28} /></Link>
      <Link href={instagram} >< FaInstagram size={24} /></Link>
      <Link href={linkedin} > < TiSocialLinkedin size={28} /></Link>
    </div>
  </div>
);

const Team = () => (
  <div className="flex flex-wrap justify-center">
    {teamMembers.map((member) => (
      <TeamCard key={member.name} {...member} />
    ))}
  </div>
);

export default Team;
