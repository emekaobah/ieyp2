import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
}

function FormField({ label, type }: FormFieldProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className="mb-2 text-sm">{label}</label>
      <input type={type} className="border-2 rounded-md h-12" />
    </div>
  );
}

function Form() {
  return (
    <form className=" container my-8 p-8 shadow-lg border rounded-lg min-h-full  mx-auto bg-white">
      <div className="text-2xl font-bold mb-16 text-center ">
        Application Form
      </div>
      <div>
        <div className="mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 ">
            <section className="mb-8">
              <p className="font-semibold text-lg mb-8">Personal Information</p>
              <FormField label="First Name" type="text" />
              <FormField label="Last  Name" type="text" />
              <FormField label="Date of Birth" type="text" />
              <fieldset className="flex flex-col space-y-2">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="border-2 rounded-md h-12"
                >
                  <option value="default">Please select an option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </fieldset>
            </section>
            <section className="mb-8">
              <p className="font-semibold text-lg mb-8">Contact Information</p>
              <FormField label="Street Address" type="text" />
              <FormField label="City" type="text" />
              <FormField label="State" type="text" />
              <FormField label="Zip Code" type="text" />
            </section>
            <section className=" mb-8">
              <p className="font-semibold text-lg mb-8">Education Background</p>
              <fieldset className="flex flex-col space-y-2 mb-4 text-sm">
                <label htmlFor="education">Educational Background</label>
                <select
                  id="education"
                  name="education"
                  className="border-2 rounded-md h-12"
                >
                  <option value="default">Please select an option</option>
                  <option value="high school">High School</option>
                  <option value="bachelors degree">Bachelors Degree</option>
                  <option value="other">Other</option>
                </select>
                <p className="italic mb-4 font-semibold ">
                  If other, please specify:
                </p>
                <FormField label="Name of Institution" type="text" />
                <FormField label="Major / Field of Study" type="text" />
                <FormField label="Graduation Year" type="text" />
              </fieldset>
            </section>
            <section>
              <p className="font-semibold text-lg mb-8">Employment Status</p>
              <fieldset className="flex flex-col space-y-2 mb-4 text-sm">
                <label htmlFor="employment">Employment Status</label>
                <select
                  id="employment"
                  name="employment"
                  className="border-2 rounded-md h-12"
                >
                  <option value="default">Please select an option</option>
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="self employed">Self employed</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
                <p className="italic mb-4 font-semibold ">
                  If Other, please specify:
                </p>
                <FormField label="Current Job Title" type="text" />
                <FormField label="Company Name" type="text" />
                <label className="font-semibold">
                  If Self-employed, describe your business:
                </label>
                <textarea
                  rows={2}
                  className="border-2 rounded-md h-12 p-4"
                ></textarea>
              </fieldset>
            </section>
            <p className="font-semibold text-lg ">Program Information</p>
            <section className=" mb-8"></section>
            <fieldset className="flex flex-col space-y-2">
              <label className="text-sm">
                What specific knowledge do you intend to gain from the program?
                (Max 200 words)
              </label>
              <textarea
                rows={10}
                className="border-2 rounded-md h-36 p-4"
              ></textarea>
            </fieldset>
            <fieldset className="flex flex-col space-y-2">
              <label className="text-sm">
                Why are you interested in the program? (Max 200 words)
              </label>
              <textarea
                rows={10}
                className="border-2 rounded-md h-36 p-4"
              ></textarea>
            </fieldset>
            <fieldset className="flex flex-col space-y-2">
              <label className="text-sm">
                How do you envision applying the skills acquired during the
                training in your career or entrepreneurial pursuits? (Max 200
                words)
              </label>
              <textarea
                rows={10}
                className="border-2 rounded-md h-36 p-4"
              ></textarea>
            </fieldset>
            <div>
              <fieldset className="flex flex-col space-y-2">
                <label className="text-sm">
                  Are you interested in applying for financial support (loans or
                  grants) after completing the program?
                </label>
                <select
                  id="finance"
                  name="finance"
                  className="border-2 rounded-md h-12"
                >
                  <option value="default">Please select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </fieldset>
              <fieldset className="flex flex-col space-y-2">
                <label className="text-sm">
                  Are you interested in being considered for national
                  entrepreneurial award?
                </label>
                <select
                  id="entrepreneurial"
                  name="entrepreneurial"
                  className="border-2 rounded-md h-12"
                >
                  <option value="default">Please select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </fieldset>
              <fieldset className="flex flex-col space-y-2">
                <label className="text-sm">
                  Do you have an Access Bank account?
                </label>
                <select
                  id="account"
                  name="account"
                  className="border-2 rounded-md h-12"
                >
                  <option value="default">Please select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto">
        <button className="py-4 items-center justify-center mx-auto bg-[#ff8200] border rounded-lg w-28 shadow-sm font-bold text-white">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
