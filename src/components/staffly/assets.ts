import icon from "@/assets/app-icon.png.asset.json";
import enAttendance from "@/assets/en-attendance.png.asset.json";
import enProfile from "@/assets/en-profile.png.asset.json";
import enCheckpoint from "@/assets/en-checkpoint.png.asset.json";
import frAttendance from "@/assets/fr-attendance.png.asset.json";
import frProfile from "@/assets/fr-profile.png.asset.json";
import frCheckpoint from "@/assets/fr-checkpoint.png.asset.json";
import arAttendance from "@/assets/ar-attendance.png.asset.json";
import arProfile from "@/assets/ar-profile.png.asset.json";
import arCheckpoint from "@/assets/ar-checkpoint.png.asset.json";
export const logo = icon.url;
export const screens = {
  en: { attendance: enAttendance.url, profile: enProfile.url, checkpoint: enCheckpoint.url },
  fr: { attendance: frAttendance.url, profile: frProfile.url, checkpoint: frCheckpoint.url },
  ar: { attendance: arAttendance.url, profile: arProfile.url, checkpoint: arCheckpoint.url },
};
