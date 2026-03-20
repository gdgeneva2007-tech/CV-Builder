export function CVviewer({ generalInfo, educationInfo, professionalInfo }) {
  return (
    <div className="flex flex-col items-center gap-5 p-8">
      {generalInfo.fullName &&
        generalInfo.phoneNumber &&
        generalInfo.email &&
        generalInfo.city && (
          <>
            <p className="text-2xl font-bold">{generalInfo.fullName}</p>
            <p className="text-[14px]">
              {generalInfo.email + '   ' + generalInfo.phoneNumber}
            </p>
            <p className="text-[14px]">{generalInfo.city}</p>
          </>
        )}
      {educationInfo.degree &&
        educationInfo.school &&
        educationInfo.startDate &&
        educationInfo.endDate &&
        educationInfo.city &&
        educationInfo.country && (
          <div className="mb-10 flex w-full flex-col">
            <div className="border-b-2 border-black p-2 text-2xl font-bold">
              Education
            </div>
            <div className="flex items-center justify-between">
              <div className="p-4 text-[20px]">
                {educationInfo.degree + ', ' + educationInfo.school}
              </div>
              <div className="p-4 text-[20px]">
                {educationInfo.startDate + ' - ' + educationInfo.endDate}
              </div>
            </div>
            <div className="w-fit self-end">
              {educationInfo.city + ', ' + educationInfo.country}
            </div>
          </div>
        )}
      {professionalInfo.jobTitle &&
        professionalInfo.company &&
        professionalInfo.startDate &&
        professionalInfo.endDate &&
        professionalInfo.description && (
          <div className="flex w-full flex-col">
            <div className="border-b-2 border-black p-2 text-2xl font-bold">
              Professional Experience
            </div>
            <div className="flex items-center justify-between">
              <div className="p-4 text-[20px]">
                {professionalInfo.jobTitle + ', ' + professionalInfo.company}
              </div>
              <div className="p-4 text-[20px]">
                {professionalInfo.startDate + ' - ' + professionalInfo.endDate}
              </div>
            </div>
            <div className="w-fit self-end">{professionalInfo.description}</div>
          </div>
        )}
    </div>
  );
}
