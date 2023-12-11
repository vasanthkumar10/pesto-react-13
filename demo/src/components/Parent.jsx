import React, { useCallback, useState } from "react";

import AgeShower from "./AgeShower";
import Button from "./Button";

function Parent() {
  const [abdullaAge, setAbdullaAge] = useState(20);
  const [sanikaAge, setSanikaAge] = useState(10);

  console.log("Parent Element");

  const incrementAbdulla = useCallback(() => {
    console.log("incrementing abdulla fn");
    setAbdullaAge((prev) => prev + 1);
  }, [abdullaAge]);

  const incrementSanika = useCallback(() => {
    console.log("incrementing sanika fn");
    setSanikaAge((prev) => prev + 1);
  }, [sanikaAge]);

  // Whenever the comp re-renders, fn memory will be recreated.
  // If the fn passed as a prop, the child will re-render again and again though we use memo

  // For normal props -> memo and for fns -> useCallback

  return (
    <div>
      <div>
        <AgeShower name="Abdulla" age={abdullaAge} />
        <Button text={"Increment Abdulla"} action={incrementAbdulla} />
      </div>
      <div>
        <AgeShower name="Sanika" age={sanikaAge} />
        <Button text={"Increment Sanika"} action={incrementSanika} />
      </div>
    </div>
  );
}

export default Parent;
