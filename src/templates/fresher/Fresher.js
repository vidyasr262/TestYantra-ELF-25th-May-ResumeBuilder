import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import AppContext from '../../context/AppContext';
import Logo from '../../assets/images/testyantra-logo.png';
import './Fresher.css';

const Fresher = () => {
  const context = useContext(AppContext);
  const { state } = context;
  const { data, theme } = state;

  // const Photo = () =>
  //   data.profile.photo !== '' && (
  //     <div className="mt-5 ml-5">
  //       <img
  //         className="w-32 h-32 rounded-full"
  //         style={{
  //           borderWidth: 6,
  //           borderColor: theme.colors.background,
  //         }}
  //         src={data.profile.photo}
  //         alt="Profile Photograph"
  //       />
  //     </div>
  //   );

  const PersonalInformation = () => (
    <div className="">
      <h1 className="text-3xl text-capitalize font-bold">
        {data.profile.firstName} {data.profile.lastName}
      </h1>
      <h1 className="text-3xl text-capitalize font-bold text-color">
      FirstName LastName
      </h1>
      <h2 className="text-2xl text-capitalize font-bold text-orange">B.E (Electronics & Communication)</h2>
      <h2 className="text-2xl text-capitalize font-bold text-color">Total Exp.:  2.6 Years</h2>
      <h2 className="text-2xl text-capitalize font-bold text-color">Relevant Exp.:  1.6 Years</h2>

     
    </div>
  );

  const Heading = ({ title, light = false }) => (
    <div
      className={`heading py-2 my-4 ${light ? 'mx-5 border-t border-b border-gray-400' : ''}`}
      style={{ backgroundColor: light ? '' : '#1f497d' }}
    >
      <h6 className={`${light ? '' : 'pl-5'} font-semibold`}>{title}</h6>
    </div>
  );

  const Objective = () =>
    data.objective &&
    data.objective.enable && (
      <div className="flex flex-col justify-center items-start mb-6">
        <Heading title={data.objective.heading} />
        <ReactMarkdown className="text-sm" source={data.objective.body} />
      </div>
    );
 

    const SkillItem = x => (
      <li key={x} className="text-sm my-2">
        {x}
      </li>
    );
  
    const Skills = () =>
      data.skills &&
      data.skills.enable && (
        <div>
          <Heading title={data.skills.heading} />
          <ul className="list-none px-5">{data.skills.items.map(SkillItem)}</ul>
          <div className="skill">
            <div className="left-col">Languages</div>
            <div className="right-col">Java 1.7, SQL, HTML, XML (Basics), CSS with Bootstrap, JavaScript, TypeScript</div>
          </div>
        </div>
      );
    
      const AwardItem = x => (
        <div key={x.id} className="my-3 px-5">
          <h6 className="font-semibold">{x.title}</h6>
          <p className="text-xs">{x.subtitle}</p>
          <ReactMarkdown className="mt-2 text-sm" source={x.description} />
        </div>
      );
    
      const Awards = () =>
        data.awards &&
        data.awards.enable && (
          <div>
            <Heading title={data.awards.heading} />
            {data.awards.items.filter(x => x.enable).map(AwardItem)}
            <ul className="list-style- px-5">
              <li>Presented the Technical Paper in ABC Competition</li>
            </ul>
          </div>
        );
  
        const WorkItem = x => (
          <div key={x.id} className="my-3 px-5">
            <div className="flex justify-between">
              <div>
                <h6 className="font-semibold">{x.title}</h6>
                <p className="text-xs">{x.role}</p>
              </div>
              <span className="text-xs font-medium">
                ({x.start} - {x.end})
              </span>
            </div>
            <ReactMarkdown className="mt-2 text-sm" source={x.description} />
          </div>
        );
      
        const Work = () =>
          data.work &&
          data.work.enable && (
            <div>
              <Heading title={data.work.heading} />
              {data.work.items.filter(x => x.enable).map(WorkItem)}
            </div>
          );


  return (
    <div
      style={{
        fontFamily: theme.font.family,
        backgroundColor: theme.colors.background,
        color: theme.colors.primary,
      }}
    >
      <div className=" grid-cols-12">
        <div className="header">
         <div className="column">
          <PersonalInformation />
          </div>
          <div className="column">
          <img src={Logo} alt="logo" />
          </div>
          
        </div>
        <div className="mx-4">
        <Objective />
        <Skills />
        <Awards />
        <Work />
          </div>
      </div>
    </div>
  );
};

export default Fresher;
