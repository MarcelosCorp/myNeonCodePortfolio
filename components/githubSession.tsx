import { SetStateAction, useEffect, useState } from 'react'
interface GitHubEvent {
  id: string
  type: string
  actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: string
    url: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  payload: {
    repository_id: number
    push_id: number
    size: number
    distinct_size: number
    ref: string
  }
  created_at: string
  public: boolean
}

const fetchFromGit = async (setCommitedToday: {
  (value: SetStateAction<Boolean>): void
  (arg0: boolean): void
}) => {
  fetch('https://api.github.com/users/marceloarraes/events/public')
    .then((res) => res.json())
    .then((data) => {
      console.log('Data123 ', data)
      const lastPush = new Date(data[0].created_at)
      if (lastPush.getDate() === new Date().getDate()) {
        setCommitedToday(true)
      }
    })
}

function GitHubSession() {
  const [commitedToday, setCommitedToday] = useState<Boolean>(false)

  useEffect(() => {
    fetchFromGit(setCommitedToday)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center object-center">
      <div
        id="github"
        className="flex w-full flex-wrap items-center justify-center border-t-2 border-gray-800 py-10 dark:border-gray-400"
      >
        <div className="mb-10 w-full text-center text-3xl font-bold">
          <h1 className="dark:text-white">GITHUB</h1>
        </div>
        <a
          className="z-40 w-72 overflow-hidden rounded bg-white shadow-xl drop-shadow-xl duration-300 ease-in-out hover:scale-105 dark:bg-gray-800 dark:text-white  "
          href="https://github.com/MarceloArraes"
          target="_blank"
        >
          <img
            className="w-full"
            src="https://avatars.githubusercontent.com/u/6797670?v=4"
            alt="Marcelo_profile"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-lg font-bold">GitHub</div>
            <p className="text-md text-base text-gray-700 dark:text-gray-200">
              This is my github profile. Here I have been updating my portfolio
              and my studies. I try to make a commit everyday. And even as I've
              failed some times this exercise still has worked for me as a
              motivator.
            </p>
          </div>
          <div className="px-6 pb-2 pt-2">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #nulla dies sine linea.
            </span>
          </div>

          {commitedToday ? (
            <div className="flex px-6 pb-2 pt-2">
              <span className="mb-2 mr-2 flex rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                <svg
                  className="h-6 w-6 stroke-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Commit made today!</span>
              </span>
            </div>
          ) : (
            <div className="flex px-6 pb-2 pt-2">
              <svg
                className="h-6 w-6 stroke-amber-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>

              <span className="font-semibold text-amber-900">
                No Commit made today!(Yet!)
              </span>
            </div>
          )}
        </a>
      </div>
      <a
        href="https://github.com/MarceloArraes"
        className="z-40 cursor-pointer rounded bg-gray-800 p-4 "
      >
        <img
          src="https://ghchart.rshah.org/MarceloArraes"
          alt="2023 Marcelo's Github chart"
        />
      </a>
    </div>
  )
}
export default GitHubSession
