import React from "react";

function ZapperGunPage() {
  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/zapper.jpg"
          alt="Zapper Gun"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl font-bold mb-4">
            Zapper Gun Controller 🔫
          </h1>

          <p className="text-lg text-gray-200">
            Convert an old zapper gun into a T-Rex Game controller
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-3xl font-bold mb-6 text-red-600">
              About This Project
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              we are going to transform a old zapper gun, into a T-Rex Game controller or "Google Meet" quit button. Not this only but you can perform any other action by changing the shortcut-key. Now let’s see how to transform it.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Using Raspberry Pi Pico and Circuit Python, you can
              customize shortcut keys and perform multiple actions.
            </p>

          </div>

          <img
            src="/zapper.jpg"
            alt="Zapper Gun"
            className="rounded-2xl shadow-xl"
          />

        </div>

        {/* COMPONENTS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-12 text-[#0f2a5f]">
            Required Components
          </h2>
          <div className="flex justify-center mb-10">
            <img 
                src="/zapper-components.jpg"
                alt="Required Components"
                className="w-full max-w-3xl rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Old Zapper Gun
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Raspberry Pi Pico with Soldered male Headers
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Male to Female Jumper Wire x5


            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              1 LED + 330 Ohm Resistor x1
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Buzzer
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Micro USB
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Soldering Iron
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Screw Driver
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Thonny IDE
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              Circuit Python
            </div>

          </div>

        </div>

        {/* STEPS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-16 text-red-600">
            Project Steps
          </h2>

          <div className="space-y-14">

            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/zapper-open.gif"
                alt="Step 1"
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 1
                </h3>

                <p className="text-gray-700">
                  Unscrew the Zapper Gun Using Screw Driver

                </p>

              </div>

            </div>
            

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 2
                </h3>

                <p className="text-gray-700">
                  After Unscrewing Open This Zapper Gun.
                </p>

              </div>

              <img
                src="/zapper-step2.gif"
                alt="Step 2"
                className="rounded-2xl shadow-xl"
              />

            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/zapper-step3.jpg"
                alt="Step 3"
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 3
                </h3>

                <p className="text-gray-700">
                  After Open the Zapper Gun Now It Will Look Something Like This

                </p>

              </div>

            </div>

            {/* STEP 4 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 4
                </h3>

                <p className="text-gray-700">
                  Necessary Parts From the Zapper Gun

                </p>
                <br></br>
                <p className="text-gray-700">
                  From this Zapper Gun, here we need only the trigger push button, trigger clip with the zapper gun case. For more clarification you can refer to the above gif.

                </p>


              </div>

              <img
                src="/zapper-step4.png"
                alt="Step 4"
                className="rounded-2xl shadow-xl"
              />

            </div>

            {/* STEP 5 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/zapper_step4.gif"
                alt="Step 5"
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 5
                </h3>

                <p className="text-gray-700">
                  Now Take Out the Push Button From the Gun.

                </p>

              </div>
              

            </div>
            {/*step6*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 6
                </h3>

                <p className="text-gray-700">
                  Solder the Three, Male to Female Jumper Wire to the Three Pins of the Push Button.

                </p>
                <br></br>
                <p>Here we are soldering the female wires so that in the further steps we can connect them to the male header of the pi pico.</p>
                


              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                src="/zapper_step6.jpg"
                alt="Step 6 - Image 1"
                className="rounded-2xl shadow-xl w-full"/>
                <img
                src="/zapper_step7.jpg"
                alt="Step 6 - Image 2"
                className="rounded-2xl shadow-xl w-full"
                />
             </div>
              

            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="grid grid-cols-2 gap-4">
                <img
                   src="/capper-step8 .jpg"
                   alt="Step 7 - Circuit Diagram 1"
                   className="rounded-2xl shadow-xl w-full"
                />
                <img
                src="/capper-step9.jpg"
                alt="Step 7 - Circuit Diagram 2"
                className="rounded-2xl shadow-xl w-full"
                />
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 7
                </h3>

                <p className="text-gray-700">
                 Now Solder the Buzzer, Led and Resistor With Each Other See the Below Images for the Circuit Diagram



                </p>

              </div>
              

            </div>
            {/*step*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 8
                </h3>

                <p className="text-gray-700">
                  Solder the Male to Female Jumper Wire to the Buzzer - LED Circuit

                </p>
                <br></br>
                <p>Now solder the one male to female jumper wire to the common anode pin of the buzzer and led and another male to female jumper wire to the common cathode pin of the buzzer and led</p>
                
                

              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                src="/zapper_step8.jpg"
                alt="Step 6 - Image 1"
                className="rounded-2xl shadow-xl w-full"/>
                
             </div>
              

            </div>
            {/*step*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="grid grid-cols-2 gap-4">
                <img
                   src="/microcontroller.jpg"
                   alt="Step 7 - Circuit Diagram 1"
                   className="rounded-2xl shadow-xl w-full"
                />
                
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 9
                </h3>

                <p className="text-gray-700">
                 Microcontroller



                </p>
                <br></br>
                <p>For Controlling the T-Rex Game OR performing any other action, here we are using the Pi Pico Microcontroller with the Soldered male Headers</p>

              </div>
              

            </div>
            {/*step*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 10
                </h3>

                <p className="text-gray-700">
                  Interfaced the Buzzer, Led and Trigger Push Button to the Pi Pico

                </p>
                <br></br>
                <li>Long leg of LED & Buzzer → GP15 (Pico)</li>
                <li>Short Leg of Led & Buzzer→ GND (Pico)</li>
                <li>Brown Wire Pin of trigger push button → GND (Pico)</li>
                <li>Yellow Wire Pin of trigger push button →GP27 (Pico)</li>
                <li>Red Wire Pin of trigger push button → VBUS (Pico)</li>                

              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                src="/Circuit .jpg"
                alt="Step 6 - Image 1"
                className="rounded-2xl shadow-xl w-full"/>
                <img
                src="/Circuit .png"
                alt="Step 6 - Image 1"
                className="rounded-2xl shadow-xl w-full"/>
                
                
             </div>
              

            </div>
            {/*step 11*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="grid grid-cols-2 gap-4">
                <img
                   src="/thonny.jpg"
                   alt="Step 7 - Circuit Diagram 1"
                   className="w-full max-w-lg rounded-2xl shadow-xl mx-auto"
                />
                
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 11
                </h3>

                <p className="text-gray-700">
                 IDE (Integrated Development Environment) for Programming the Pi Pico.</p>
                
                
              </div>
              

            </div>
            {/*step*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 12
                </h3>

                <p className="text-gray-700">
                  Install the Circuit Python Firmware Into Pi Pico.

                </p>
                <br></br>
               <li>Download the CircuitPython UF2 file using{" "}<a
               href="https://drive.google.com/file/d/1RNC7dHi8MO7byFoEAX7GWlsGCdqa_xtX/view"
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 underline hover:text-blue-800">this link</a>.</li>
                <li>Push and hold the BOOTSEL button and plug your Pico into the USB port of your computer. </li>
                <p>Release the BOOTSEL button after your Pico is connected.</p>
                
              </div>

              <div className="grid grid-cols-2 gap-4">
                <video
                   className="rounded-2xl shadow-xl w-full"
                   autoPlay
                   muted
                   loop
                   playsInline>
                  <source src="/file.mp4" type="video/mp4" />
                </video>
                                
                
             </div>
              

            </div>
            {/*step 13*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step13.jpg"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 13
                </h3>

                <p className="text-gray-700">
                 Pi Pico Will Mount As a Mass Storage Device Called RPI-RP2 in Your Computer</p>
                
                
              </div>
              

            </div>
            {/*step*/}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 14
                </h3>

                <p className="text-gray-700">
                  Reboot Your Pi Pico for the Circuit Python

                </p>
                <br></br>
                <p>Drag and drop the Circuit Python UF2 file onto the RPI-RP2 volume. Your Pico will reboot. You are now running Circuit Python.</p>
                
                

              </div>

              <div className="flex justify-center">
                <video
                   className="w-[900px] rounded-2xl shadow-xl"
                   autoPlay
                   muted
                   loop
                   playsInline
                >
                  <source src="/step14.mp4" type="video/mp4" /></video>
              </div>

            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step15.avif"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 15
                </h3>

                <p className="text-gray-700">
                 Add the adafruit circuitpython_hid library for adding the keyboard and mouse capabilities in to the pi pico.</p>
                <br></br>
                
                <li>Download the library by clicking{" "}<a
               href="https://drive.google.com/drive/folders/10fMaqUIGvQLqbj49nCvOoC2o0mMjmKXE"
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 underline hover:text-blue-800">this link</a>.</li>
                <li>Paste this lib folder into the Pi Pico Volume</li>
                
              </div>
              

            </div>
             <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 16
                </h3>

                <p className="text-gray-700">
                  Open the Thonny IDE. and Choose the Circuit Python Port.</p>
                
                

              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step16.avif"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step18.jpg"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 17
                </h3>

                <p className="text-gray-700">
                 Write the below code and save the file with the name of code.py. (If you are saving the file with some another name then in that condition you will have to upload the code each time when you plugged the pi pico.)##########################</p>
                <br></br>
                <p>import time<br></br>
                  import usb_hid<br></br>import board<br></br>from digitalio import DigitalInOut, Direction, Pull<br></br>from adafruit_hid.keyboard import Keyboard<br></br>from adafruit_hid.keycode import Keycode
                   <br></br>keyboard=Keyboard(usb_hid.devices)
                   <br></br>btn1_Pin = board.GP27<br></br>led1_pin = board.GP15<br></br>btn1 = DigitalInOut(btn1_Pin)<br></br>btn1.direction = Direction.INPUT
                   <br></br>btn1.pull = Pull.UP<br></br>led1 = DigitalInOut(led1_pin)<br></br>led1.direction = Direction.OUTPUT
                   <br></br>while True:<br></br>if btn1.value:
                   <br></br>led1.value = True<br></br>keyboard.press(0x2C)<br></br>else:<br></br>led1.value = False
                   <br></br>keyboard.release(0x2C)</p>
                
                
                
              </div>
              

            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 18
                </h3>

                <p className="text-gray-700">
                 Run the Code by Clicking on Run Button at the Top</p>
                
                

              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step19.jpg"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="flex justify-center">
                <iframe
                className="w-[900px] h-[500px] rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/fHQMM5wgDnY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
              </div>
              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 19
                </h3>

                <p className="text-gray-700">
                 Check That All Is Working Fine Before Placing the Hardware Inside the Gun</p>
                
                
              </div>
              

            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 20
                </h3>

                <p className="text-gray-700">
                 After Testing, Unplug the Pi Pico From Your Computer.</p>
                
                

              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step20.avif"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="flex justify-center">
                <iframe
                className="w-[900px] h-[500px] rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/cNolrbYiB9w?si=639i04xkzPqLgm-h"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
              </div>
              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 21
                </h3>

                <p className="text-gray-700">
                 Attach All of That Interfaced Hardware Inside the Gun and Screwed the Gun</p>
                
                
              </div>
              

            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 22
                </h3>

                <p className="text-gray-700">
                 Plug the Pi Pico to Your Computer & Enjoy Your Zapper Gun for Your Desired Action.</p>
                
                

              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                src="/step22.avif"
                alt="Step 13"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110"/>
              
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div className="flex justify-center">
                <iframe
                className="w-[900px] h-[500px] rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/m8hSgWVPbn8?si=QbH3mKE4oO2JSlNA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
              </div>
              
              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 23
                </h3>

                <p className="text-gray-700">
                 Want to Perform Some Another Using the Gun.</p>
                 <br></br>
                 <p>If you want to perform some another action using the same gun then in the line no. 18 & 21 just change the shortcut key according to your desired action & run the code again that’s it.
                  Click on this link to see the key code of any keyboard key.
                  <br></br>
                  Thank You. If you have any question.
                  <br></br>
              
                  regarding anything don’t hesitate to ask. And don’t forget to share your work also.</p>
                
                
              </div>
              

            </div>

          </div>

        </div>

        {/* FINAL CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-12 rounded-3xl text-center shadow-xl">

          <h2 className="text-4xl font-bold mb-6">
            Enjoy Your DIY Zapper Gun 🔫
          </h2>

          <p className="max-w-3xl mx-auto text-lg">
            Customize your shortcut keys and create your own
            gaming or productivity controller.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ZapperGunPage;