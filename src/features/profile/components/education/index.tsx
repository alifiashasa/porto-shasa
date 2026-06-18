import React from "react";

import { EDUCATION } from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "../experiences/experience-item";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATION.map((educationItem) => (
          <ExperienceItem key={educationItem.id} experience={educationItem} />
        ))}
      </div>
    </Panel>
  );
}
