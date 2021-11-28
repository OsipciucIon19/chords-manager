
export default class ChordsService {

    getChordsList() {
        return [
            {
                id: 1,
                artists: ["First Artist", "Second Artist"],
                title: "Song Title",
                text: "<p><b>This is bolded,</b> but this is not</p>"
            }, {
                id: 2,
                artists: ["Another Artist"],
                title: "Nice Song",
                text: "<p><b>This is bolded,</b> but this is not</p>"
            }
        ];
    }
}