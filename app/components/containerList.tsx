import * as React from 'react'
import { Container, ContainerListItem } from './containerListItem'
import {SectionsContainer, Section} from 'react-fullpage'

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           false, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};


export class ContainerListProps {
    containers: Container[]
    title?: string
}

export class ContainerList extends React.Component<ContainerListProps, {}> {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{ this.props.containers.length == 0 ? "No containers to show" : this.props.containers.length }</p>
                <SectionsContainer className="container" {...options}>
                    { this.props.containers.map(( c : Container, i: number) => <Section><ContainerListItem key={i} {...c} /></Section>) }
                </SectionsContainer>
            </div>
        )
    }
}