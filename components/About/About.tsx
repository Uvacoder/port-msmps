import Link from '@/components/Link';
import Image from 'next/image';
import avatar from '../../public/avatar.jpg';

export default function About() {
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="pr-0 sm:pr-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-3 text-brand-dark dark:text-white">
          Hi, I&apos;m Matt.
        </h1>
        <p className="text-brand-dark dark:text-white mb-3">
          I&apos;m a software engineer, tech enthusiast, and creator. I work at{' '}
          <Link
            color="#f86f26"
            className="transition-colors duration-200 font-semibold hover:text-brand-blue"
            href="https://capitalone.co.uk/"
          >
            Capital One
          </Link>{' '}
          as a <span className="font-semibold">senior developer -</span>{' '}
          focusing on customer engagement and communications.
        </p>
        <p className="text-brand-dark dark:text-white mb-8">
          Let&apos;s hang out on{' '}
          <Link
            color="#26a0f8"
            className="transition-colors duration-200 font-semibold hover:text-brand-blue"
            href="https://twitter.com/msmps_"
          >
            Twitter{' '}
          </Link>
          , alternatively check out my code on{' '}
          <Link
            color="#26f87d"
            className="transition-colors duration-200 font-semibold hover:text-brand-blue"
            href="https://github.com/msmps/"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
      <div className="w-[80px] sm:w-[180px] flex-shrink-0 mb-8 sm:mb-0">
        <Image
          alt="Avatar of me"
          width={180}
          height={180}
          src={avatar}
          className="rounded-full"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
