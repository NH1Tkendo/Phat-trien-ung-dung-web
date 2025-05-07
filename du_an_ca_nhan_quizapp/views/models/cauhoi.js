class CauHoi{
    constructor(id, cauHoi){
        this.id = id;
        this.cauHoi = cauHoi;
        this.tracNghiem = [];
    }

    
    themDapAn(cauTraLoi, dapAn){
        this.tracNghiem.push({cauTraLoi, dapAn});
    }

    toJSON() {
        return {
            id: this.id,
            cauHoi: this.cauHoi,
            tracNghiem: this.tracNghiem
        };
    }

    static fromRows(rows){
        const danhSachCauHoi = []
        const mapCauHoi = new Map();

        rows.forEach(row => {
            const id = row.ID;

            if(!mapCauHoi.has(id)){
                mapCauHoi.set(id, new CauHoi(id, row.CauHoi))
            }
            mapCauHoi.get(id).themDapAn(row.CauTraLoi, row.DapAn);
        });

        mapCauHoi.forEach(CauHoi => danhSachCauHoi.push(CauHoi))
        return danhSachCauHoi;
    }
}

module.exports = CauHoi;