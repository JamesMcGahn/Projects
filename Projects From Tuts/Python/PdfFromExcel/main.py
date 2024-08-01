import glob
from pathlib import Path

import pandas as pd
from fpdf import FPDF

filepaths = glob.glob("./excel-files/*.xlsx")

for filepath in filepaths:

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_page()

    filename = Path(filepath).stem
    invoice_num, date = filename.split("-")
    pdf.set_font(family="Times", size=16, style="B")
    pdf.cell(w=50, h=8, txt=f"Invoice Number: {invoice_num}", ln=1)
    pdf.set_font(family="Times", size=16, style="B")
    pdf.cell(w=50, h=8, txt=f"Date: {date}", ln=1)

    df = pd.read_excel(filepath, sheet_name="Sheet 1")

    comlumns = [x.replace("_", " ").title() for x in df.columns]
    pdf.set_font(family="Times", size=10)
    pdf.cell(w=30, h=8, txt=comlumns[0], border=1)
    pdf.cell(w=70, h=8, txt=comlumns[1], border=1)
    pdf.cell(w=30, h=8, txt=comlumns[2], border=1)
    pdf.cell(w=30, h=8, txt=comlumns[3], border=1)
    pdf.cell(w=30, h=8, txt=comlumns[4], border=1, ln=1)

    for _, row in df.iterrows():
        pdf.set_font(family="Times", size=10)
        pdf.cell(w=30, h=8, txt=str(row["product_id"]), border=1)
        pdf.cell(w=70, h=8, txt=row["product_name"], border=1)
        pdf.cell(w=30, h=8, txt=str(row["amount_purchased"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["price_per_unit"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["total_price"]), border=1, ln=1)

    total_sum = df["total_price"].sum()
    pdf.set_font(family="Times", size=10)
    pdf.cell(w=30, h=8, txt="", border=1)
    pdf.cell(w=70, h=8, txt="", border=1)
    pdf.cell(w=30, h=8, txt="", border=1)
    pdf.cell(w=30, h=8, txt="", border=1)
    pdf.cell(w=30, h=8, txt=str(total_sum), border=1, ln=1)
    pdf.set_font(family="Times", style="B", size=10)

    pdf.cell(w=30, h=8, txt=f"The total price is ${total_sum}", ln=1)
    pdf.set_font(family="Times", style="B", size=14)

    pdf.cell(w=30, h=8, txt="Test Company", ln=1)
    pdf.image("logo.png")

    pdf.output(f"pdfs/{filename}.pdf")
