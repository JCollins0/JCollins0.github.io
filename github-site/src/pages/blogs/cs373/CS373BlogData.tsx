import { Link } from "@mui/material";
import { BlogPostData } from "../../../shared/components/BlogPost";

export const blogPostDataMap = new Map<String, BlogPostData>();
blogPostDataMap.set("week1", [
  {
    id: 0,
    heading: "What are my expectations of the class?",
    paragraph: (
      <>
        I expect to learn a lot about working in a team with this course as well
        as learning new software development workflows and tools especially
        Javascript, SQL, and python. Even if I may never use the tools we use in
        this class, I think it will be worthwhile to learn new things.
      </>
    ),
  },
  {
    id: 1,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        In class on Wednesday, Downing had us introduce ourselves to our
        neighbors and draw a picture of them. We then went over usual first day
        syllabus things. On friday we talked about Docker, an easy tool to setup
        development environmnets which I thought was really fascinating. I had
        never really heard of Docker before then.
      </>
    ),
  },
  {
    id: 2,
    heading: "What's in my way?",
    paragraph: (
      <>
        One big thing in my way is living far away from campus. With a twenty
        minute walk or fifteen minute bus ride forces me to wake up earlier than
        from when I lived on campus. Other than that I would say that having
        three CS classes is also going to be a struggle with homework, projects,
        etc. for each class. Finally making this website by hand without
        templates is very difficult, but doable.
      </>
    ),
  },
  {
    id: 3,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will probably get together with my team and discuss what
        need to do to be successful in the class and also setup meeting times to
        work. I hope that next week we will be given the project that we will
        start to work on, so that my group can start to discuss. I will probably
        also start reading some of the textbook chapters to get a more firm
        understanding of the material.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my experience with the class?",
    paragraph: (
      <>
        I like the idea of "Cold-Calling" which aides in the interaction between
        professor and student and forces participation as well as the
        conversation that Downing has with the student that is called on. I have
        never had a class do that before so I am intereseted in seeing how it
        plays out throughout the semester.
      </>
    ),
  },
  {
    id: 5,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick-of-the-week is{" "}
        <Link href="https://atom.io/" target="_blank">
          Atom
        </Link>
        . It is the code editor made by Github, so it interacts nicely there,
        and has many plugins that are useful. I am using atom to write this blog
        currently and have used it in many other CS classes as a universal text
        editor.
      </>
    ),
  },
]);

blogPostDataMap.set("week2", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I mostly worked on my compilers homework which is not too
        bad except for the part about Integers and Float parsing with scientific
        notation. I also attended the kickoff meeting for CSRoadshow because I
        want to participate in a CS outreach program. In addition to school
        work, I also pan fried chicken for the first time which turned out
        pretty decent for my first time frying something ever.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        The number one thing that is in my way is finding quicker recipes to
        cook so that I have more time to do other things. I also find that
        procrastination is getting to me already so early in the semester and it
        is definitely a habit that I have to break sooner rather than later.
        Another thing in my way is having a Windows PC, a lot of development
        tools are not designed for Windows, so even if there is a port, it is
        not executed the same way as the original. For example, I had installed
        'Gnu Make' for windows so that if I developed C code I could compile it
        using a makefile, but the command that it uses is "mingw32-make" which I
        aliased to 'make' so that it would function the same as make. A lot of
        extra work for something simple, but that's Windows for you.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        This upcomming week I will start working on the first Collatz project. I
        already have some Python coding experience so I feel this assignment
        should not be that complicated. The hard part will be to use all of the
        workflow tools that Downing has us using, as I have never used a lot of
        those features before.
      </>
    ),
  },
  {
    id: 3,
    heading: "What's my experience with the class?",
    paragraph: (
      <>
        I really like the class so far. I love the conversations that Downing
        has with each student that benefits the whole class. I also like that
        during class Downing takes notes, so that we essentially don't have to.
        It allows me to pay attention more in class rather than worrying about
        missing information.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick-of-the-week is{" "}
        <Link href="http://flask.pocoo.org/" target="_blank">
          Flask
        </Link>
        . Flask is a micro web framework written in Python that is very useful
        for creating web server architecture with Python as the backend. I've
        used it this weekend to create a web application to scrape data from the
        university dining hall menus and present the data in a much more useful
        view than what the university has to offer(in my opinion). Check it out{" "}
        <Link href="https://github.com/JCollins0/MenuProject" target="_blank">
          Here
        </Link>
      </>
    ),
  },
]);

blogPostDataMap.set("week3", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I spent a lot of time on all of my Computer Science class
        projects. Especially I spent a lot of time debugging my Lexical
        Analyzer's floating point conversion. It was pretty difficult, but I
        managed to figure it out, though probably not in the cleanest of ways. I
        also finished the Collatz project, doing the workflow, optimizing, etc.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        I still continue to have procrastination issues. I also recently
        discovered a small leak under my sink that may have been leaking for a
        while. I'm not sure if maintainence will even be able to fix it any time
        soon. Oh the wonders of living in an apartment in West Campus.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        This next week I will focus on updating my resume to get ready for the
        CNS Career Fair on Thrusday. I will need to update my resume quite a bit
        which will probably take a few days to get it the way I want it, but it
        will be worth it when I hopefully get an interview. I will also start
        studying for my Interest Theory exam by doing practice problems from the
        textbook. Financial terms and formulas are not my expertice so it will
        take me a while to get to know all of the formulas and what they mean.
      </>
    ),
  },
  {
    id: 3,
    heading: "What's my experience with the in class exercises?",
    paragraph: (
      <>
        In my opinion, the in class exercises help me with problem solving and
        debugging that will be useful for exams. It also helps to learn
        conventional ways of doing things in industry as well as practical uses.
        I enjoy problem solving and doing it in groups in class allow me to
        communicate ideas more effectively than if I were to do it alone.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My tip of the week is to start EARLY on assignments even if you think
        that the project will be easy, it is best to get a head start in case
        other things pop up or unexpected bugs that occur. I know that with
        Career Fair coming up I will have to push aside some projects, so
        getting an early start will prevent me from pushing it aside.
      </>
    ),
  },
]);

blogPostDataMap.set("week4", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week, I turned in most of my class projects. I also spent a
        lot of time getting ready for Career Fair. I updated my resume, worked
        on other classwork so that I could allow for all of my Thursday to be
        devoted to the FOCS brunch and Career Fair. I also had the wonderful
        experience of trying to connect to my roommate's printer so that I could
        print my resumes.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        The main thing in my way is my Theory of Interest class. The professor
        insists on being right all of the time, so even when she makes a
        mistake, she has to be right. It makes me frustrated; I love math, but
        the professor's attitude is making it less fun. I have a test next week
        in Theory of Interest and finding the time and motivation to study for
        the test is slowly fading.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working on my second compilers project. I only have
        one week to do it, so hopefully it is easier than the first assignment.
        I also have two tests next week, so studying for those tests will take
        up most of my week. As for entertainment, I'm planning to see Ocean's 8
        at the Union movie theater. I love that UT Events and Entertainment
        exists and puts on free movies every week.
      </>
    ),
  },
  {
    id: 3,
    heading: "What was your experience of Project #1?",
    paragraph: (
      <>
        The complexity of Project #1 was overall not that bad. The problem was
        pretty easy to solve especially in python. The hardest part was going
        through the workflow checklist vigorously to make sure that I hadn't
        forgoten or skipped any steps. Making issues on GitLab definitely helped
        with not forgetting any steps. I know that the workflow was a little
        overkill for Collatz, but it will definitely be useful for the group
        project later on, as there will be way more stuff to do.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick of the week is{" "}
        <Link href="https://www.texstudio.org/" target="_blank">
          TexStudio
        </Link>
        . TexStudio is a LaTeX editor that has auto complete, an integrated PDF
        viewer, spell checking, word frequency checking, inline formula
        previewing, syntax highlighting, and much much more. I find TexStudio to
        be better than most editors that I have used before, especially online
        editors. The autocomplete prety much puts it over the top for me.
      </>
    ),
  },
]);

blogPostDataMap.set("week5", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I found my group for the big group project, and we
        discussed many ideas for what our project should be. I also took 2
        exams, both of which I felt I did pretty well on. I did my first
        hackerrank coding challenge for a company and it went very smoothly, one
        problem took me 10 minutes while the other took me 90. On friday I also
        attended the Under Armor talk and learned the importance of state driven
        development as opposed to adding a bunch of boolean variables to code.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        The SWE project is one big thing that I find will be hard for me, time
        management wise. I know meeting with the group is very important, but I
        feel like with everyone's busy schedule we won't be able to make that
        happen. Another thing in my way is learning javascript. For this project
        I will probably need to learn javascript and various js frameworks if I
        want to help on the frontend; we haven't really decided what areas of
        the site we each would focus on, but just in case.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working on my third compilers project. I only have
        ten days to do it, so hopefully it is not that difficult. I also have to
        meet with my group to determine what still needs to be done with our
        project. I am also planning to attend a Beto rally this next week, which
        I know will be very crowded. I also really want to see Hereditary at the
        Union because one of my friends over the summer told me it was a pretty
        good movie.
      </>
    ),
  },
  {
    id: 3,
    heading: "What's your experience of the readings, so far?",
    paragraph: (
      <>
        To be honest I kind of skim through the readings, but they are helpful,
        interesting tidbits that talk about real life and what it's like in
        industry. I found the Under Armor talk very interesting and I like that
        they used example code in their presentation to get across their point
        of state driven development. In my opinion seeing code is far better
        than just talking about it and hoping everyone understands what you're
        talking about.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick of the week is{" "}
        <Link href="https://calendar.google.com/" target="_blank">
          Google Calendar
        </Link>
        . I use Google Calendar for any and all of my events. It keeps me
        organized, and is especially nice with my Pixel phone as it shows my
        next/current event at the top of my home/lock screen which is good for
        an at a glance. They recently revamped their web UI to look more like
        the app, so it is very clean.
      </>
    ),
  },
]);

blogPostDataMap.set("week6", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week in class we talked about generators in python. I think
        generators are amazing. With O(1) creation complexity, generators
        actually are a smart way of saying"I want to do use this formula but not
        actually compute anything yet". I also worked a lot on project #2 with
        my group and cut it close to the 10pm due date, but we got it done.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        Now that the semester has progressed, some of the work in my classes is
        getting more complicated, except for Programming for
        Correctness/Performance: if you're in that class you know what I'm
        talking about. The SWE project is a lot of work working with tools I've
        never used before and requires collaboration and compromise. Trying to
        balance that with the fact that the compilers project has got me using
        YACC with C to build a parser, which, I had to figure out how to get
        YACC to output build messages because printf was not working when there
        was an error... Just like OS all over again.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working on my phase 2 of the SWE project with my
        group, hopefully making progress towards better organization and job
        assignments. I'm also hoping to hear back from a couple of companies
        about whether or not I get an interview. In addition on Thursday, I'm
        planning on seeing Jurassic World Fallen Kingdom at the Union which
        should be fun.
      </>
    ),
  },
  {
    id: 3,
    heading: "What was your experience of Project #2?",
    paragraph: (
      <>
        The project gave me a real taste of what working in a group is going to
        be like throughout the semester. I found that collaborating on slack was
        really easy, although it's no discord. I found the project was quite
        rushed for only having a week to do it, but I'm glad we get a month
        before the next phase is due. I know people were asking for extensions
        on Piazza, but in the real world there may not be the ability for an
        extension, so we just have to learn to complete the project within the
        given time frame and get it done whatever it takes.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick-of-the-week is{" "}
        <Link href="https://winscp.net/" target="_blank">
          WinSCP
        </Link>
        . WinSCP is a file transfer tool that uses SSH connections and allows
        you to access the remote file system. It is very similar to the sshfs
        linux package. The default editor that WinSCP comes with is similar to
        notepad, but you can change that to allow you to open the files in any
        editor that you want. For me that's Atom and it works great; I can have
        syntax highlighting and formatting and then Ctrl+S to save it on the
        remote server.
      </>
    ),
  },
]);

blogPostDataMap.set("week7", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week in class we talked about function parameter passing,
        unpacking and packing. I thought it was really neat that python had ways
        of specifying a parameter by name instead of just by position. I think
        that makes it useful to not have to remember what order the parameters
        are passed, but the name of the parameter that is passed. I also had an
        on campus Interview which I was really excited for. I also saw Jurassic
        World fallen kingdom at the Union
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        My Interest Theory class is getting harder, I can't quite wrap my head
        around what information the word problem is giving me. In class and in
        the textbook we don't do as difficult problems as the Quest homework so
        it is really frustrating when I cant figure out what to do for a
        problem. I also push a lot of things back because I have two tests this
        week so I'm behind quite a bit. Hopefully things will get better when I
        can figure out how to manage my time.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working on my fourth compilers project. I have to do
        quite a bit of work to create the next parse tree so wish me luck. I
        also have to talk with my group to determine what needs to be done with
        our project. After this exam we should have time to talk and discuss
        about the next steps. After seeing my score for project #2, I want to
        not wait for the last minute so that we can make sure that we have
        everything that we need for our project.
      </>
    ),
  },
  {
    id: 3,
    heading: "What was your experience of learning the basics of Python?",
    paragraph: (
      <>
        I really loved going in depth in Python. I had written some python code
        before but it probably wasn't the best I could have written had I known
        about generators or function packing/unpacking or comprehensions. It was
        actually kind of nostalgic because learning all of these intricacies
        made it seem like the UIL tests back in high-school but just for Python.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick-of-the-week is the{" "}
        <Link href="https://www.chick-fil-a.com/One" target="_blank">
          Chic-fil-A One App
        </Link>
        . If you didn't know the Chic-fil-A on MLK gives away free food on the
        app all the time. If you love Chic-fil-A like me then you will want to
        use this app. I have gotten so much free food from them, plus if you
        mobile order you get even more free food.
      </>
    ),
  },
]);

blogPostDataMap.set("week8", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I took the first SWE exam and 2nd Programming for
        Correctness exam. In class we talked about database functions: select,
        and project. I like that we implemented them in Python and that it only
        took about 2 lines of code per function. I love Python for that reason
        that we can simplify massive amounts of code in another language in just
        a few lines.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        Not much has changed since last week. I still am very busy and feel very
        stressed out right now. My Interest Theory class is still hard, I can't
        quite wrap my head around what information the word problem is giving
        me. In class and in the textbook we don't do as difficult problems as
        the Quest homework so it is really frustrating when I cant figure out
        what to do for a problem. Annuities are very hard to grasp for me. I
        also push a lot of things back because I have two tests this week so I'm
        behind quite a bit especially for this SWE project. Hopefully things
        will get better when I can figure out how to manage my time.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working exstensivly on the SWE project. We have to
        do quite a bit of work (all of it basically). I also have to study for
        my compilers exam so that I have some idea of what's going on. After my
        exams are over I plan to relax a bit and rest my brain. I also plan on
        seeing Incredibles 2 at the union on Thursday.
      </>
    ),
  },
  {
    id: 3,
    heading:
      "What was your experience of Test #1 (the problems, the time, HackerRank)",
    paragraph: (
      <>
        I love HackerRank just for the fact that it has an internal code editor
        with semi-autocomplete. I felt the exam was really really easy the
        problems weren't that difficult and I like that some built upon other
        problems so that it didn't fell like I was writing a whole ton of code.
        I finished in 20 minutes at a exam that was alloted 1 hr and 30 minutes.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My tip-of-the-week is don't be like me and procrastinate or fall asleep
        in class. Be a good student who pays attention and takes notes and gets
        things done early. I realize I need to change my ways, but it is very
        hard for me.
      </>
    ),
  },
]);

blogPostDataMap.set("week9", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I took two exams and got an A on both of them
        suprisingly. I also worked long hours on the SWE project which is
        consuming most of my time. In class we talked about natural join. I like
        that we implemented it in Python and that it only took about 2 lines of
        code to produce. I love Python for that reason that we can simplify
        massive amounts of code in another language in just a few lines.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        Not much has changed since last week. I still am very busy and feel very
        stressed out right now. My Interest Theory class is still hard, I can't
        quite wrap my head around what information the word problem is giving
        me. In class and in the textbook we don't do as difficult problems as
        the Quest homework so it is really frustrating when I cant figure out
        what to do for a problem. Annuities are very hard to grasp for me. I
        also push a lot of things back because I have two tests this week so I'm
        behind quite a bit especially for this SWE project. Hopefully things
        will get better when I can figure out how to manage my time.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be celebrating when our group finishes Phase II of the
        project. There is so much to that we have to do still. I'm not even
        really sure what the unit testing is even supposed to comprise of.
      </>
    ),
  },
  {
    id: 3,
    heading: "What did you think of the talk by Dr. Rich and Dr. Cline?",
    paragraph: (
      <>
        I thought that Dr. Rich and Dr. Cline's talk was very interesting. I
        thought it was a little frustrating when they said there was no clear
        cut way to solve any ethical issue, it all depends on what the situation
        is and there could be multiple ways of looking at the situation which
        makes it even more difficult. I've seen them on the course schedule a
        few times and I kind of want to take a class from them if I can.
      </>
    ),
  },
  {
    id: 4,
    heading: "If you went, what did you think of the talk by Atlassian?",
    paragraph: (
      <>
        Unfortunately I could not attend the Atlassian talk because I was
        working on the project. :(
      </>
    ),
  },
  {
    id: 5,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick-of-the-week is React.js. What an amazing thing to have been
        created. It makes web design a piece of cake, except for CSS of course
        that is still a lot of messy properties that don't really affect what
        the sound like they should affect. React is like java in my opinion
        because you have classes, variables and functions, it just renders html
        instead of performing computations. I love it and you should too.
      </>
    ),
  },
]);

blogPostDataMap.set("week10", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I worked very extensively on the SWE project in the early
        half of the week. In the latter half I was relaxing and watching Netflix
        to cool my brain off after so much thinking and frustration. I also got
        my test results from last Week and found out that I did really well on
        them.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        One major thing in my way is not knowing or understanding how to
        unittest a website. I know there are frameworks out there that make
        testing easy, but I just don't understand what to test and why would we
        test it. I also have to start cooking more food for myself as I have not
        really been cooking at all and thus my food choices have devolved to
        mostly snacks. It is not a good thing to just snack all of the time, so
        I have to be more strict with myself and not snack a lot.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working on cleaning up the look (CSS) of our website
        and maybe spicing up the Models page to make it more visually appealing.
        I will also be doing more unit-testing with the site and implementing
        the searching and sorting/filtering react components (or at least
        figuring it out). I will also be finishing up my compilers parser which
        I know is going to be a lot of work. It is frustrating only because
        there is not enough information given to solve the problem effectively
        and it's mostly a bunch of testing an thinking if it looks right...
      </>
    ),
  },
  {
    id: 3,
    heading: "What was your experience of Project #3?",
    paragraph: (
      <>
        I actually had a lot of fun with project #3. Even though my group almost
        waited until last minute, we still managed to get everything done on
        time. I had never used ReactJS before this project, and now, I
        absolutely love it. I had also never used databases at all before this
        project and I found that SQLAlchemy is just magic and abstracts a lot of
        the database intrinsics. Design is still not my best attribute, so
        although the website does not look that great, its mechanics are really
        clean.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick of the week is Netflix. Want a way to relax after completing a
        hard project? Is the weather bad outside? Is it late at night? If you
        answered yes to any of the above questions, then Netflix is for you. I
        have been watching netflix a lot recently and really like it. I even
        like that it recommends other shows to watch related to the shows that
        I've watched previously.
      </>
    ),
  },
]);

blogPostDataMap.set("week11", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I worked very extensively on the SWE project in the early
        half of the week. In the latter half I was relaxing and watching Netflix
        to cool my brain off after so much thinking and frustration. I also
        started working on my compilers project which is still in progress. I
        also went to see 'Sorry to Bother You' at the union. It was a very
        interesting movie that had a larger meaning than all of the literal
        randomness that was present in the movie. I also got a job offer from
        Visa, so I'm really happy.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        One major thing in my way is not knowing or understanding how to
        unittest a website. I know there are frameworks out there that make
        testing easy, but I just don't understand what to test and why would we
        test it. I still also have to start cooking more food for myself as I
        have not really been cooking at all and thus my food choices have
        devolved to mostly snacks. It is not a good thing to just snack all of
        the time, so I have to be more strict with myself and not snack a lot.
        Another thing in my way is dealing with time management with 3 separate
        projects going on.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be working on adding searching/sorting/filtering to our
        website and maybe spicing up the Models page to make it more visually
        appealing. I will also be doing more unit-testing with the site and
        implementing the I will also be working on my compilers parser which I
        know is going to be a lot of work. It is frustrating not only because
        there is not enough information given to solve the problem effectively
        and it's mostly a bunch of testing an thinking if it looks right, but
        also because my program seg-faults every other time I edit and run it
        which is very frustrating to track down the source of.
      </>
    ),
  },
  {
    id: 3,
    heading: "What was your experience in learning SQL?",
    paragraph: (
      <>
        I actually had a lot of fun learning SQL. I never really knew about
        databases before, and now I have a lot of respect for them in how
        powerful database queries are. A lot of the queries are basically in
        plain english so a WYSIWYG style declarative language makes it really
        easy to generate queries. The hard part is knowing all of the vocabulary
        and knowing what the results of subqueries are and how subqueries work
        and what all is compatible with other commands.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My pick of the week is Matlab. I know a lot of people hate on Matlab,
        including me, but it does have some perks. The only thing I find useful
        is matrix/vector operations and graphing. Matlab matricies can be
        declared almost like 2D arrays and there are built in functions for
        inverses and even a simple symbol ' which it uses for transpose. I do
        have some downsides though with Matlab. One especially painful thing is
        that array indexing starts at 1 which just kills me. I know that the
        things I'm describing are just scratching the surface of Matlab, but
        until I actually care to dive deeper these are my opinions.
      </>
    ),
  },
]);

blogPostDataMap.set("week12", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week I worked on completing the frontend for our SWE project.
        It didn't take very long and I was happy about that because I also had a
        compilers project that I needed to do and I had put off working on it
        for a week. Luckily I finished my compilers parser on saturday after I
        had left it seg-faulting last tuesday. It was a pain in the butt to
        debug but I eventually found my issue and continued to work diligently.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        Not a lot in my way. I am starting to feel slugish though and have a
        slight headache. I feel that the weather flip flopping back and forth
        from hot to cold is not doing so well for my health. I finished all of
        my projects that were due before the break so as for right now I'm
        chilling out and having an easy slide into the week. Something that I am
        now starting to realize is that this blog is constantly something that I
        dread having to write. I don't really know why, because I like writing
        down my thoughts and summaries of my week. I just feel that because I'm
        being forced it's less fun. I would love to continue to write blogs in
        the future but I find that my laziness would prevent me from really
        getting into it.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will not be focused on school at all. I will be driving home
        on Wednesday unless my classes on Tuesday are cancelled. Hopefully the
        drive doesn't involve a lot of traffic since I'll be driving to Houston
        on 290. I am looking forward to seeing my family again an eating some
        delicious home cooked food (as opposed to ramen).
      </>
    ),
  },
  {
    id: 3,
    heading: "What was your experience of Project #4?",
    paragraph: (
      <>
        Since in our project we were doing a lot of computation in the backend,
        we found a way to implement searching, sorting,filtering completely in
        the backend with only a few minor changes to the frontend. Overall this
        phase was not a lot of work for me. We managed to get it all done in
        just a few days.
      </>
    ),
  },
  {
    id: 4,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My tip-of-the-week is to go home relax and enjoy the break while you can
        because as soon as you come back school is going to hit you like a truck
        with the next phase of IDB due that tuesday. Eat a lot of turkey get
        nice and plump and forget the worries of school. Leave school for
        school!
      </>
    ),
  },
]);

blogPostDataMap.set("week13", [
  {
    id: 0,
    heading: "What did I do this past week?",
    paragraph: (
      <>
        This past week in class we talked about refactoring in java by using
        class Class to create instances of classes. I had never really used that
        functionality in Java before so it was really interesting to learn
        about. I also had never used streams in Java before which make code
        really readable from what I've seen. I also went apartment hunting with
        my roommate to find a place for the 2019-20 school year. In addition I
        worked on my compilers code generator and the SWE visualizations for our
        site and the providers site.
      </>
    ),
  },
  {
    id: 1,
    heading: "What's in my way?",
    paragraph: (
      <>
        I have a cough that has lasted for about two weeks. It is good at times,
        but really bad at some times. I have invested in cough drops and other
        vitamins and have been eating a lot of oranges but it seems I just
        cannot shake this cough. D3 has also been a struggle for me as I really
        don't understand all of the minute details about how d3 work, so our
        visualizations are very basic.
      </>
    ),
  },
  {
    id: 2,
    heading: "What will I do next week?",
    paragraph: (
      <>
        Next week I will be presenting with my group the SWE project. I will
        also be hosting part of a progressive dinner next Friday with my church,
        so a lot of cleaning and cooking. I will also be working on my compilers
        code generator to finish it up and get it all working. I guess I should
        also start 'studying' for the SWE exam next monday.
      </>
    ),
  },
  {
    id: 3,
    heading: "If you went, what did you think of the talk by Google?",
    paragraph: (
      <>
        I honestly thought the talk by Google was not really that worth going
        to. Maybe a few of the things they said were important like getting more
        women into leadership roles. The conversation I felt was too focused on
        their personal lives which was very specific to them and almost to me
        felt a little too personal to be asked. This is just my opinion.
      </>
    ),
  },
  {
    id: 4,
    heading: "What was your experience of the refactoring topics?",
    paragraph: (
      <>
        Refactoring is a useful thing for making the code simpler and the
        mindset that Downing has put into our heads about not changing the test
        cases is something that I had never really thought of before. I liked
        learning about the intricacies of Java that I had never really touched
        on before.
      </>
    ),
  },
  {
    id: 5,
    heading: "What's my pick-of-the-week or tip-of-the-week?",
    paragraph: (
      <>
        My tip-of-the-week is to not blow off the last week of school. A lot of
        our grade is still yet to be determined, so don't slack off yet. Even
        when you feel like you don't want to do work, you have to persevere.
      </>
    ),
  },
]);

blogPostDataMap.set("final", [
  {
    id: 0,
    heading: "What did you like the least about the class?",
    paragraph: (
      <>
        Although I like the class a lot, I felt the project topic was too narrow
        which caused the presentations to be quite monotonous. The requirements
        for the project were fine, it just felt kind of forced upon us instead
        of taking our own creative thoughts. I probably am not really explaining
        very well what I mean, so sorry about that.
      </>
    ),
  },
  {
    id: 1,
    heading: "What did you like the most about the class?",
    paragraph: (
      <>
        I like a lot of things about the class, but probably the thing that I
        like the most about the class was the Lectures. This was one of the most
        engaging CS classes that I have taken at UT. Downing has so much
        knowledge about what he's teaching and the cold calling keeps everyone
        in class on their toes. Although I never took notes, I learned a lot
        just from listening in class.
      </>
    ),
  },
  {
    id: 2,
    heading: "What's the most significant thing you learned?",
    paragraph: (
      <>
        The most significant thing that I learned in this class was mainly
        Python generators. I had never even heard of them before and they are so
        so useful. Another significant thing that I learned was SQL. Databases
        are very powerful and querying them is even more powerful and useful for
        large amounts of data retrieval. I had also never really dealt with any
        SQL before so it was suprising to me how easy it was to pick up.
      </>
    ),
  },
  {
    id: 3,
    heading:
      "How many hours a week did you spend coding/debugging/testing for this class?",
    paragraph: (
      <>
        My group was the type of group to procrastinate until the weekend before
        the project was due, so while I did not do a bunch of programming
        throughout the week. I spent quite a long time on the weekends working
        on React code for our frontend website, sometimes even getting into 3am
        in the morning not realizing what time it was.
      </>
    ),
  },
  {
    id: 4,
    heading:
      "How many hours a week did you spend reading/studying for this class?",
    paragraph: (
      <>
        To be honest, I never did any of the readings. I only realy 'studied' by
        creating a review sheet for the exam usually a few days before the
        exams. I can ususaly just listen, learn, and understand CS topics pretty
        easily so I don't need to study too hard usually.
      </>
    ),
  },
  {
    id: 5,
    heading: "How many lines of code do you think you wrote?",
    paragraph: (
      <>
        I would say that I've probably written somewhere around 2000 lines of
        code.
      </>
    ),
  },
  {
    id: 6,
    heading: "What required tool did you not know and now find very useful?",
    paragraph: (
      <>
        If React is considered a tool then I would say that React is a very good
        javascript framework to build dynamic websites.
      </>
    ),
  },
  {
    id: 7,
    heading:
      "What's the most useful Web dev tool that your group used that was not required?",
    paragraph: (
      <>
        I used the Advanced Rest Client as a way of viewing Restful API requests
        easier than from the console. It wasn't necessarily a web dev tool, but
        it was used in our data collection phase that made everything easier.
      </>
    ),
  },
  {
    id: 8,
    heading:
      "If you could change one thing about the course, what would it be?",
    paragraph: (
      <>
        If I could change one thing about the course I would add a small unit on
        React just becuase if someone has never used it before it could be a big
        knowledge gap for them to start immediately using that on the project.
      </>
    ),
  },
]);

blogPostDataMap.set("ethics", [
  {
    id: 0,
    heading: "I am responding to the prompt The Suggestion Box",
    paragraph: (
      <>
        If my boss were to come to me as the systems administrator to find out
        who stated in the anonymous suggestion box that "every 10th part I turn
        out is defective", I would surely be faced with a dilema. Do I do what
        is morally right for the people who buy the defective products or do I
        do what is right and protect the identity of the person who wrote the
        comment since this was supposed to be an anonymous suggestion box. This
        to me is very similar to the ethical dilema brought up in the trolley
        problem where you can either kill one person that you love or sacrifice
        3+ people that you don't even know. The posibility for me to make a
        clear cut decision is impossible give only the information provided in
        the original problem statement. Some additional information that might
        be useful to help me answer the question is what are the consequences of
        not complying. Am I going to get fired, are other people going to get
        fired, is there going to be a massive 'witch hunt' lookng for the one
        who made the statement. If I were risking being fired, could I find
        another job to support myself, or am I reliant on this current job as
        systems administrator. Other questions I have are: how serious was the
        person who made the statment, it could have been a joke or prank. I feel
        there should be a statment put out to the company addressing the
        statement made before any action is taken to see if the person who made
        the statment will come forward on his own without having to invade the
        privacy of someone. Why did this person make this statement and what
        were the events that could have led to this person making these
        statements. Is it something that could have been avoidable. Even given
        this extra information I would probably still be conflicted. Making
        choices is a very hard thing to do. It happens every day at every second
        of our lives, yet it is still hard to do in certain situations. If I had
        to make a clear cut decision I would probably do nothing and say to my
        boss that is against my moral views to out someone for speaking their
        mind as you allowed them to. This type of scenario is ironically what
        led to my computer archetecture class' piazza to be filled with random
        meme posts instead of useful questions because the posts were anonymous
        to everyone including the professor. This type of situation actually
        pops up more than I thought in real life and is something that I will
        continue to think about for the rest of my career. Ethics was not really
        something I thought about when I first got into computer science and was
        not something that I thought about when I got to UT. In several of my
        classes we have talked about ethics and I know I will take more classes
        that talk about ethics. I need to internalize the ethics viewpoint in
        all that i do to continue to think about ethics in my future job and in
        life in general.{" "}
      </>
    ),
  },
]);
