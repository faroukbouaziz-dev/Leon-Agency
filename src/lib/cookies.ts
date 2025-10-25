import { cookies } from "next/headers";

export const getThemePreference = async () => {
  const cookie = await cookies();
  const raw = cookie.get("isLight")?.value;

  if (raw === undefined) return null;

  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error(
      "isLight should be boolean either literally true or false",
      err,
    );
    return null;
  }
};
