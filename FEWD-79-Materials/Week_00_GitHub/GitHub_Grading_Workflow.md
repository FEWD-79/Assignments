##FEWD GitHub Grading Workflow

###Purpose of this document

- Instructional team should be able to describe the homework submission and grading process using GitHub
- Instructional team should be able to describe how students will be assessed using a simple numeric scale
- Instructional team should be able to explain how GitHub will be used to provide feedback to students

##Student Submission

Students should submit homework via GitHub using the techniques taught in [this lesson](README.md)

* Depending on the assignment, students will either create a new repository with the project name or contribute to an existing repo. 
* They should commit all of their files when they are ready for the instructional team's review.
* All changes should be submitted to the master branch - we will not ask students to branch, merge, or create pull requests in this course. 
* After publishing their changes, students should submit a link to the repository to the Instructional Team via email, Slack or the class Schoology page (if used in your market). 

##Instructional Review

There is a two-part process for homework / project review outlined below. We recommend having the instructional team break the class into equal groups for grading with EIRs (experts in residence, i.e. instructors and TAs), with each EIR grading the same group of students, week to week.

###Part 1: Code Review

The most important part of the homework process is giving feedback on students' code quality and application of skills. We will use GitHub's in-line commenting system to share this feedback.

* For a particular homework / project, open up a student's repository
* Go to the "Commits" tab. Most students will have a single commit. If students have a couple commits, you may want to review multiple commits. 
* To provide your feedback, click on a commit
* Review the code and use GitHub in-line commenting for feedback. Aim to make at least 3 comments on every assignment: two things you liked - with one comment for each - and one comment where a line or block of code could be improved. Also, feel free to note any additional issues with their code using in-line comments. For students that are doing well this may be limited. However, for students who are struggling on a section, this is a great opportunity to reinforce solutions to issues: students tend to make the same mistakes throughout their codebase.
    - An example of a comment showing one thing you liked: "Your code is nicely commented!  I was easily able to follow what you were trying to do here."
    - An example of a comment showing one thing you *didn't* like: "You rewrote this anonymous function three different times.  Think about how could have declared a function and called that function in different places instead rewriting that script each time."
* Students will receive notifications of the feedback via GitHub.


###Part 2: Grading

While the qualitative feedback on an assignment's code review is critical, we also need to provide high-level quantitative feedback to students for each assignment. In order to grade student work, please follow the workflow below:

* First (and most importantly!) mark the assignment as completed in the course tracker that your producer provides you with. This is what we use to keep track of who has completed the requirements in order to graduate from the course.
* Next, in order to provide feedback directly to the student, copy and paste the rubric from the rubric.md file. Make sure you press the "Raw" button first, in order to copy the formatting in Markdown format.
* Navigate to the student's homework assignment repo, open a new issue and paste in the rubric in the area where it says "Leave a comment".
* Now, fill in the rubric using the grading criteria outlined for the assignment. In the "Technical Requirements" and "Evaluation/Submission" sections of each assignment prompt you'll find information on the requirements for that assignment. Assign a numerical grade for each technical requirement based on the student's fulfillment of that requirement using the scale below. The highest possible score on a given assignment will always be the total number of technical requirements multiplied by two. For example, if a homework assignment has 10 Technical Requirements, then the maximum number of points a student can earn on that assignment is 20.
  * __2 points__ when a technical requirement exceeds expectations
  * __1 point__ when a technical requirement meets expectations
  * __0 points__ when a technical requirement does not meet expectations.
* Once you're done filling in the rubric, go ahead and submit the issue. The student will receive a notification via email that you have opened an issue.