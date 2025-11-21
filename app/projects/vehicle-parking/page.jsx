"use client";
import Image from "next/image";  

export default function Quizmaster() {
  return (
    <>
      <div className="pt-24 flex flex-col items-center px-4 md:px-0 space-y-6">

        {/* Diploma Image */}
        <div className="pt-10">
          <Image 
            src="/diploma_1.png"
            alt="logo"
            width={780}
            height={680}
            className="rounded-xl border-4 border-gray-200"
          />
        </div>

        {/* Status badges */}
        <div className="flex gap-4">
          <p className="bg-green-600 text-white px-4 py-1 rounded">Completed</p>
          <p className="bg-black text-white px-4 py-1 rounded">Hosted on Vercel</p>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-2xl text-center font-ovo">Quiz Master-V1</h1>

        {/* Description */}
        <p className="mt-2 text-center max-w-2xl">
          An online platform built to simplify learning and assessment. 
          Teachers can create quizzes easily, while students can take exams and track progress. 
          Designed to make knowledge testing efficient, interactive, and accessible for everyone.
        </p>

        {/* Project Info */}
        <ul className="mt-6 space-y-2 text-center">
          <li><strong>Timeline:</strong> 2 months</li>
          <li><strong>Role:</strong> Full Stack</li>
          <li><strong>Team:</strong> Solo</li>
          <li><strong>Status:</strong> Completed</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Live Demo
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            Source Code
          </button>
        </div>

        {/* Technology Stack */}
        <div className="text-center mt-6">
          <h4 className="text-xl font-semibold">Technology Stack</h4>
          <div className="mt-2">
            <h5 className="font-semibold">Frontend:</h5>
            <ul className="list-disc list-inside">
              <li>Bootstrap</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="mt-2">
            <h5 className="font-semibold">Backend:</h5>
            <ul className="list-disc list-inside">
              <li>Flask</li>
              <li>Jinja2</li>
              <li>SQLite</li>
              <li>Matplotlib</li>
            </ul>
          </div>
        </div>

        {/* Key Challenges */}
        <div className="max-w-3xl text-center mt-6">
          <h4 className="text-lg font-semibold">Key Challenges</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Handling dynamic quiz creation and storage.</li>
            <li>Ensuring real-time scoring and feedback for students.</li>
            <li>Implementing secure role-based access for teachers and students.</li>
          </ul>
        </div>

        {/* Key Learnings */}
        <div className="max-w-3xl text-center mt-6">
          <h4 className="text-lg font-semibold">Key Learnings</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Building a full-stack app with Flask and Jinja2 templates.</li>
            <li>Integrating frontend frameworks like Bootstrap for responsive design.</li>
            <li>Implementing authentication and data management with SQLite.</li>
            <li>Improving UX by providing interactive and real-time feedback.</li>
          </ul>
        </div>

        {/* Overview */}
        <div className="max-w-3xl text-center mt-6">
          <h2 className="text-2xl font-bold">Quiz Master: A Quiz Giving Platform</h2>
          <h5 className="text-lg font-semibold mt-4">Overview</h5>
          <p>
            Quiz Master is a web-based application that allows educators to create, manage, 
            and conduct quizzes online while giving students a seamless platform to take exams 
            and test their knowledge in a structured and interactive way.
          </p>

          <h5 className="text-lg font-semibold mt-4">What Users Can Do:</h5>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li>Teachers can create quizzes with multiple question types.</li>
            <li>Students can attempt quizzes online anytime.</li>
            <li>Automatic scoring and instant feedback for students.</li>
            <li>Track student performance and analytics.</li>
            <li>Manage quiz schedules and deadlines efficiently.</li>
            <li>Secure login and role-based access for teachers and students.</li>
            <li>Export results for reports and analysis.</li>
          </ul>
        </div>

        {/* Purpose */}
        <div className="max-w-3xl text-center mt-6">
          <h2 className="text-2xl font-bold">Why We Built This</h2>
          <p>
            Traditional exams are time-consuming to organize and manage. Teachers often face challenges 
            in creating and grading quizzes manually.
          </p>
          <p>
            Quiz Master was built to automate this process, making it easier for educators to create 
            assessments and for students to practice in a structured way.
          </p>
          <p>
            The platform improves learning outcomes by providing instant feedback and performance tracking.
          </p>
          <p>
            It also encourages interactive learning, making education more engaging and accessible.
          </p>
          <p>
            Overall, it solves the real-world problem of inefficient manual assessments in education.
          </p>
        </div>

      </div>
    </>
  );
}
