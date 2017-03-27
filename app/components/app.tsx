import * as React from 'react'
import { Container, ContainerListItem } from './containerListItem'
import { ContainerList } from './containerList'
import * as _ from 'lodash'
class AppState {
    containers?: Container[]
    stoppedContainers?: Container[]
}

export class AppComponent extends React.Component<{}, AppState> {
    containers: Container[] = [
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '1',
        name: 'test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'running',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    },
    {
        id: '3',
        name: 'another test s conddtainer',
        image: 'The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of its speed and direction of motion (e.g. 60 km/h to the north). Velocity is an important concept in kinematics, the branch of classical mechanics that describes the motion of bodies.  Velocity is a physical vector quantity; both magnitude and direction are needed to define it. The scalar absolute value (magnitude) of velocity is called "speed", being a coherent derived unit whose quantity is measured in the SI (metric) system as metres per second (m/s) or as the SI base unit of (m⋅s−1). For example, "5 metres per second" is a scalar, whereas "5 metres per second east" is a vector.',
        state: 'stopped',
        status: 'In physics, a force is any interaction that, when unopposed, will change the motion of an object. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate.'
    }
];

constructor() {
    super()

    const partitioned = _.partition(this.containers, c => c.state == 'running')

    this.state = {
        containers: partitioned[0],
        stoppedContainers: partitioned[1]
    }
}

    render() {
    return (
        <div className="container">
            <h1 className="page-header">Docker Dashboard</h1>

            <ContainerList title="Running" containers={this.state.containers} />
            <ContainerList title="Stopped containers" containers={this.state.stoppedContainers} />
        </div>
    )
}
}