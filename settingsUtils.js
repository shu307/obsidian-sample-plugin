import { __awaiter } from "tslib";
import { Setting } from "obsidian";
import { DEFAULT_SETTINGS as defaultSettings } from "settings";
import { SETTING_TAB_INFOS as settingTabInfos } from "settingTab";
export default class SettingsUtils {
    static getNumberOrNull(input) {
        const numberPattern = /^-?\d+(\.\d+)?$/;
        return numberPattern.test(input) ? parseFloat(input) : null;
    }
    static getStringOrNull(input) {
        return input.trim() === input ? input : null;
    }
    static getInputOrDflt(input, key) {
        const dflt = defaultSettings[key];
        if (typeof defaultSettings[key] === 'string')
            return this.getStringOrNull(input) || dflt;
        else
            return this.getNumberOrNull(input) || dflt;
    }
    static verifyData(data) {
        for (const key in defaultSettings) {
            const k = key;
            data[k] = this.getInputOrDflt(String(data[k]), k);
        }
        return data;
    }
    static addTabText(plugin, containerEl, settingKey) {
        const texts = settingTabInfos[settingKey];
        const curr = plugin.userSettings[settingKey];
        const dflt = defaultSettings[settingKey];
        new Setting(containerEl)
            .setName(texts.name)
            .setDesc(texts.desc)
            .addText(text => text
            .setPlaceholder(String(dflt))
            .setValue(String(curr))
            .onChange((input) => __awaiter(this, void 0, void 0, function* () {
            // check is valid
            plugin.userSettings[settingKey] = this.getInputOrDflt(input, settingKey);
            yield plugin.saveSettings();
        })));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9zZXR0aW5nc1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBRyxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixJQUFJLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUtsRSxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWE7SUFFOUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFhO1FBQ2hDLE1BQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDO1FBQ3hDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBYTtRQUNoQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQWEsRUFBRSxHQUFlO1FBQ2hELE1BQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVqQyxJQUFJLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVE7WUFDeEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQzs7WUFFM0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFzQjtRQUNwQyxLQUFLLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRTtZQUMvQixNQUFNLENBQUMsR0FBRyxHQUFpQixDQUFDO1lBQzNCLElBQUksQ0FBQyxDQUFDLENBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDckU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFzQixFQUFFLFdBQXdCLEVBQUUsVUFBc0I7UUFDdEYsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO2FBQ2hCLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QixRQUFRLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN0QixpQkFBaUI7WUFDaEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDMUYsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZlaWdodFBsdWdpbiBmcm9tIFwibWFpblwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7ICBERUZBVUxUX1NFVFRJTkdTIGFzIGRlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCJzZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBTRVRUSU5HX1RBQl9JTkZPUyBhcyBzZXR0aW5nVGFiSW5mb3MgfSBmcm9tIFwic2V0dGluZ1RhYlwiO1xyXG5pbXBvcnQgeyBOYXZlaWdodFNldHRpbmdzLCBTZXR0aW5nS2V5LCBTZXR0aW5nRGF0YSB9IGZyb20gXCJ0eXBlcy90eXBlc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc1V0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0TnVtYmVyT3JOdWxsKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJQYXR0ZXJuID0gL14tP1xcZCsoXFwuXFxkKyk/JC87XHJcbiAgICAgICAgcmV0dXJuIG51bWJlclBhdHRlcm4udGVzdChpbnB1dCkgPyBwYXJzZUZsb2F0KGlucHV0KSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFN0cmluZ09yTnVsbChpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0LnRyaW0oKSA9PT0gaW5wdXQgPyBpbnB1dCA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldElucHV0T3JEZmx0KGlucHV0OiBzdHJpbmcsIGtleTogU2V0dGluZ0tleSk6IFNldHRpbmdEYXRhIHtcclxuICAgICAgICBjb25zdCBkZmx0ID0gZGVmYXVsdFNldHRpbmdzW2tleV1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkZWZhdWx0U2V0dGluZ3Nba2V5XSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZ09yTnVsbChpbnB1dCkgfHwgZGZsdDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlck9yTnVsbChpbnB1dCkgfHwgZGZsdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmVyaWZ5RGF0YShkYXRhOiBOYXZlaWdodFNldHRpbmdzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdFNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXkgYXMgU2V0dGluZ0tleTtcclxuICAgICAgICAgICAgKGRhdGFba10gYXMgU2V0dGluZ0RhdGEpID0gdGhpcy5nZXRJbnB1dE9yRGZsdChTdHJpbmcoZGF0YVtrXSksIGspXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRUYWJUZXh0KHBsdWdpbjogTmF2ZWlnaHRQbHVnaW4sIGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ0tleTogU2V0dGluZ0tleSkge1xyXG4gICAgICAgIGNvbnN0IHRleHRzID0gc2V0dGluZ1RhYkluZm9zW3NldHRpbmdLZXldO1xyXG4gICAgICAgIGNvbnN0IGN1cnIgPSBwbHVnaW4udXNlclNldHRpbmdzW3NldHRpbmdLZXldO1xyXG4gICAgICAgIGNvbnN0IGRmbHQgPSBkZWZhdWx0U2V0dGluZ3Nbc2V0dGluZ0tleV07XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0ZXh0cy5uYW1lKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0ZXh0cy5kZXNjKVxyXG4gICAgICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihTdHJpbmcoZGZsdCkpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKGN1cnIpKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jIChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgKHBsdWdpbi51c2VyU2V0dGluZ3Nbc2V0dGluZ0tleV0gYXMgU2V0dGluZ0RhdGEpID0gdGhpcy5nZXRJbnB1dE9yRGZsdChpbnB1dCwgc2V0dGluZ0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==