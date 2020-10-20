import React, { useState, useEffect } from 'react';
import './App.css';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'

function App() {

  const [groupA, setgroupA] = useState([
    { id: "1", name: "G2", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591333874_G2G2-01-FullonDark.png" },
    { id: "2", name: "Suning", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592592023323_SuningSN-01-FullonDark.png" },
    { id: "3", name: "Machi Esports", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592590875575_TeamLiquidTL-01-FullonDark.png" },
    { id: "4", name: "Team Liquid", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592588618196_MachiMCX-01-FullonDark.png" },
  ])
  const [groupB, setgroupB] = useState([
    { id: "5", name: "JD Gaming", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591827851_JDGamingJDG-01-FullonDark.png" },
    { id: "6", name: "DAMWON Gaming", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592589259480_DamwonGamingDWG-01-FullonDark.png" },
    { id: "7", name: "Rogue", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591512937_RogueRGE-01-FullonDark.png" },
    { id: "8", name: "PSG Talon", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1600106840359_TalonPSG-01-FullonDark1.png" },
  ])
  const [groupC, setgroupC] = useState([
    { id: "13", name: "Gen.G", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592589327622_Gen.GGEN-01-FullonDark.png" },
    { id: "14", name: "Fnatic", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png" },
    { id: "15", name: "TSM", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592590917094_TSMTSM-01-FullonDark.png" },
    { id: "16", name: "LGD Gaming", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591876371_LGDGamingLGD-01-FullonDark.png" },
  ])
  const [groupD, setgroupD] = useState([
    { id: "9", name: "Top Esports", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592592064571_TopEsportsTES-01-FullonDark.png" },
    { id: "10", name: "DRX", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592589284897_DRXDRX-01-FullonDark.png" },
    { id: "11", name: "Unicorns of Love", image: "https://am-a.akamaihd.net/image/?resize=52:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fteam%2Funicorns-of-love-8qvakeja.png" },
    { id: "12", name: "FlyQuest", image: "https://am-a.akamaihd.net/image/?resize=52:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592590438547_FlyQuestFLY-01-FullonDark.png" },
  ])

  const saveLocalA = () => {
    localStorage.setItem('group-A', JSON.stringify(groupA));
  }
  const saveLocalB = () => {
    localStorage.setItem('group-B', JSON.stringify(groupB));
  }
  const saveLocalC = () => {
    localStorage.setItem('group-C', JSON.stringify(groupC));
  }
  const saveLocalD = () => {
    localStorage.setItem('group-D', JSON.stringify(groupD));
  }
  const getLocal = () => {
    if (localStorage.getItem('group-A') === null) {
      localStorage.setItem('group-A', JSON.stringify([]));
    } else {
      let localA = JSON.parse(localStorage.getItem('group-A'));
      setgroupA(localA);
    }

    if (localStorage.getItem('group-B') === null) {
      localStorage.setItem('group-B', JSON.stringify([]));
    } else {
      let localB = JSON.parse(localStorage.getItem('group-B'));
      setgroupB(localB);
    }

    if (localStorage.getItem('group-C') === null) {
      localStorage.setItem('group-C', JSON.stringify([]));
    } else {
      let localC = JSON.parse(localStorage.getItem('group-C'));
      setgroupC(localC);
    }

    if (localStorage.getItem('group-D') === null) {
      localStorage.setItem('group-D', JSON.stringify([]));
    } else {
      let localD = JSON.parse(localStorage.getItem('group-D'));
      setgroupD(localD);
    }
  }

  useEffect(() => {
    getLocal();
  }, [])
  useEffect(() => {
    saveLocalA();
    saveLocalB();
    saveLocalC();
    saveLocalD();
  }, [groupA, groupB, groupC, groupD])

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {

    if (!result.destination) {
      return;
    }
    if (result.source.droppableId === 'droppableA') {
      const itemsA = reorder(
        groupA,
        result.source.index,
        result.destination.index
      );
      setgroupA(itemsA);
    }
    if (result.source.droppableId === 'droppableB') {
      const itemsB = reorder(
        groupB,
        result.source.index,
        result.destination.index
      );
      setgroupB(itemsB);
    }
    if (result.source.droppableId === 'droppableC') {
      const itemsC = reorder(
        groupC,
        result.source.index,
        result.destination.index
      );
      setgroupC(itemsC);
    }
    if (result.source.droppableId === 'droppableD') {
      const itemsD = reorder(
        groupD,
        result.source.index,
        result.destination.index
      );
      setgroupD(itemsD);
    }
  }

  return (
    <div className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="content">
          <div className="nav">
            <span className="title">MY PICKS</span>
          </div>
          <div className="main-content">
            <div className="helper-text">Drag a team to place it in the order you believe they will finish at the end of Group Stage.</div>
            {/* <div className="helper-saved">Your picks are saved! You can continue to make changes to your group stage picks until the window closes.</div> */}

            <div className="group-container">
              <div className="group-nav"><span className="group-title">GRUPA A</span></div>
              <div className="teams">
                <div className="numbers">
                  <div className="rank"><span className="slot-rank">1</span> </div>
                  <div className="rank"><span className="slot-rank">2</span> </div>
                  <div className="rank"><span className="slot-rank">3</span> </div>
                  <div className="rank"><span className="slot-rank">4</span> </div>
                </div>
                <Droppable droppableId="droppableA">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="team-wrapper">
                      {groupA.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div key={item.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="team-div"><span className="team-logo"><img src={item.image} alt="" /></span> <span className="team-name">{item.name}</span><span className="drag-icon"><i className="fas fa-bars"></i></span></div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <div className="group-container">
              <div className="group-nav"><span className="group-title">GRUPA B</span></div>
              <div className="teams">
                <div className="numbers">
                  <div className="rank"><span className="slot-rank">1</span> </div>
                  <div className="rank"><span className="slot-rank">2</span> </div>
                  <div className="rank"><span className="slot-rank">3</span> </div>
                  <div className="rank"><span className="slot-rank">4</span> </div>
                </div>
                <Droppable droppableId="droppableB">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="team-wrapper">
                      {groupB.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div key={item.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="team-div"><span className="team-logo"><img src={item.image} alt="" /></span> <span className="team-name">{item.name}</span><span className="drag-icon"><i className="fas fa-bars"></i></span></div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <div className="group-container">
              <div className="group-nav"><span className="group-title">GRUPA C</span></div>
              <div className="teams">
                <div className="numbers">
                  <div className="rank"><span className="slot-rank">1</span> </div>
                  <div className="rank"><span className="slot-rank">2</span> </div>
                  <div className="rank"><span className="slot-rank">3</span> </div>
                  <div className="rank"><span className="slot-rank">4</span> </div>
                </div>
                <Droppable droppableId="droppableC">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="team-wrapper">
                      {groupC.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div key={item.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="team-div"><span className="team-logo"><img src={item.image} alt="" /></span> <span className="team-name">{item.name}</span><span className="drag-icon"><i className="fas fa-bars"></i></span></div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <div className="group-container">
              <div className="group-nav"><span className="group-title">GRUPA D</span></div>
              <div className="teams">
                <div className="numbers">
                  <div className="rank"><span className="slot-rank">1</span> </div>
                  <div className="rank"><span className="slot-rank">2</span> </div>
                  <div className="rank"><span className="slot-rank">3</span> </div>
                  <div className="rank"><span className="slot-rank">4</span> </div>
                </div>
                <Droppable droppableId="droppableD">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="team-wrapper">
                      {groupD.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div key={item.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="team-div"><span className="team-logo"><img src={item.image} alt="" /></span> <span className="team-name">{item.name}</span><span className="drag-icon"><i className="fas fa-bars"></i></span></div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div >
  );
}

export default App;
