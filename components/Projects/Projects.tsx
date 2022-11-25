import type { RepositoryConnection } from 'types/github';

type Props = {
  repositories: RepositoryConnection;
};

export default function Projects({ repositories }: Props) {
  return (
    <>
      <h3 className="font-bold text-xl text-brand-dark dark:text-white sm:mt-8">
        Projects
      </h3>
      <div className="flex flex-wrap: wrap sm:flex-row gap-6 mt-4">
        {repositories.nodes.map(({ id, name, url, description }) => (
          <a
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="transform-gpu hover:scale-[1.01] transition-all rounded-md p-4 bg-gray-200 dark:bg-gray-800 w-full sm:w-1/2"
            data-splitbee-event={'Open Project'}
            data-splitbee-event-project={name}
          >
            <div>
              <h4 className="font-bold text-brand-dark dark:text-white mb-3">
                {name}
              </h4>
              <p className="text-gray-700 dark:text-white">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
