function Left () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
}
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    Backward()
})
function Forward () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
}
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    Stop()
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    Stop()
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    Forward()
})
function Right () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
}
function Stop () {
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
}
function Backward () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
}
radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        while (pins.digitalReadPin(DigitalPin.P0) == 1) {
            Right()
        }
        Stop()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        while (pins.digitalReadPin(DigitalPin.P13) == 1) {
            Left()
        }
        Stop()
    } else {
    	
    }
})
